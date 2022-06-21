import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Divider,
  Group,
  ScrollArea,
  Select,
  Space,
  Text,
  TextInput,
  TextInputProps,
} from '@mantine/core'
import { Plus } from 'tabler-icons-react'

import { ICommonSubPageFormProps } from '../../../types/common.types'

import { FormModal } from '../../../components'
import {
  Controller,
  useFieldArray,
  useForm,
  UseFormReturn,
} from 'react-hook-form'
import { PRODUCT_TYPE } from '../../../types/products.types'
import { ProductDetails } from './components/ProductDetails'

interface IControlledTextInputProps extends TextInputProps {
  name: string
  methods: UseFormReturn<any, any>
}

const ControlledTextInput: FC<IControlledTextInputProps> = (props) => {
  const { name, methods } = props

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field }) => (
        <TextInput {...props} value={field.value} onChange={field.onChange} />
      )}
    />
  )
}

export interface IProduct {
  id: string
  size: string
  type: PRODUCT_TYPE | null
}

interface IForm {
  customer: string
  phone: string
  address: string
  district: string
  deliveryType: string
  deliveryFee: string
  products: IProduct[]
}

const OrdersForm: FC<ICommonSubPageFormProps> = (props) => {
  const { type } = props

  const navigate = useNavigate()

  const methods = useForm<IForm>({
    defaultValues: {
      customer: '',
      phone: '',
      address: '',
      district: '',
      deliveryType: '',
      deliveryFee: '',
      products: [
        {
          type: PRODUCT_TYPE.DRINK,
          size: '',
        },
        {
          type: PRODUCT_TYPE.SALTY_PIZZA,
          size: '',
        },
        {
          type: PRODUCT_TYPE.SWEET_PIZZA,
          size: '',
        },
      ],
    },
  })

  const products = useFieldArray({
    control: methods.control,
    name: 'products',
    keyName: 'key',
  })

  const [productType, setProductType] = useState<string | null>(null)
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (productType !== null) {
      setError(undefined)
    }
  }, [productType])

  return (
    <FormModal
      title={type === 'NEW' ? 'Cadastro de Pedido' : 'Edição de Pedido'}
      formId='orderForm'
      onSubmit={methods.handleSubmit((val) => console.log(val))}
      onClose={() => navigate('/orders')}
      width='70%'
    >
      <Group noWrap align='start'>
        <div style={{ width: '30%' }}>
          <ControlledTextInput
            name='customer'
            methods={methods}
            label='Cliente'
          />

          <ControlledTextInput
            name='phone'
            methods={methods}
            label='Telefone'
          />

          <ControlledTextInput
            name='address'
            methods={methods}
            label='Endereço'
          />

          <ControlledTextInput
            name='district'
            methods={methods}
            label='Bairro'
          />

          <ControlledTextInput
            name='deliveryType'
            methods={methods}
            label='Tipo de Entrega'
          />

          <ControlledTextInput
            name='deliveryFee'
            methods={methods}
            label='Taxa de Entrega'
          />
        </div>

        <div style={{ width: '70%' }}>
          <Group align={error ? 'center' : 'end'} noWrap spacing='xs'>
            <Select
              label='Produtos'
              placeholder='Selecione um produto para adicionar'
              searchable
              nothingFound='Opção não existe'
              error={error}
              data={[
                { label: 'Bebidas', value: PRODUCT_TYPE.DRINK },
                { label: 'Pizza Salgada', value: PRODUCT_TYPE.SALTY_PIZZA },
                { label: 'Pizza Doce', value: PRODUCT_TYPE.SWEET_PIZZA },
              ]}
              clearable
              value={productType}
              onChange={setProductType}
              style={{ width: '100%' }}
            />

            <Button
              leftIcon={<Plus />}
              color='dark'
              onClick={() => {
                if (productType === null) {
                  setError('Selecione um produto')
                  return
                }

                products.append({ size: '', type: productType as PRODUCT_TYPE })
                setProductType(null)
              }}
            >
              Adicionar
            </Button>
          </Group>

          <Space h='md' />

          <ScrollArea style={{ height: '400px' }} offsetScrollbars>
            {products.fields.map((field, index) => (
              <ProductDetails
                key={field.key}
                index={index}
                details={field}
                onRemove={() => products.remove(index)}
              />
            ))}
          </ScrollArea>
        </div>
      </Group>

      <Divider />

      <Text>Total: R$200,00</Text>
    </FormModal>
  )
}

export default OrdersForm
