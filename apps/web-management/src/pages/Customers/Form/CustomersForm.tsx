import { FC } from 'react'
import { Button, Group, Modal, Stack } from '@mantine/core'

import { ICommonSubPageFormProps } from '../../../types/common.types'

import { ControlledTextInput } from '../../../components/ControlledTextInput'

import { useCustomersForm } from './hooks/useCustomersForm'

const CustomersForm: FC<ICommonSubPageFormProps> = props => {
  const { type } = props

  const { methods, handleSubmit, handleClose } = useCustomersForm(props)

  return (
    <Modal
      centered
      opened
      onClose={handleClose}
      title={type === 'NEW' ? 'Cadastro de Cliente' : 'Edição de Cliente'}
      closeOnClickOutside={false}
      trapFocus
    >
      <form id='customersForm' onSubmit={handleSubmit}>
        <Stack>
          <Stack spacing='xs'>
            <ControlledTextInput
              methods={methods}
              name='name'
              label='Nome'
              placeholder='Nome'
              autoComplete='none'
              required
            />

            <ControlledTextInput
              methods={methods}
              name='phone'
              label='Telefone'
              placeholder='Telefone'
              autoComplete='none'
              required
            />

            <ControlledTextInput
              methods={methods}
              name='address'
              label='Endereço'
              placeholder='Endereço'
              autoComplete='none'
              required
            />
          </Stack>

          <div>
            <Group position='right' spacing='xs'>
              <Button type='submit' form='customersForm'>
                Salvar
              </Button>

              <Button variant='default' onClick={handleClose}>
                Fechar
              </Button>
            </Group>
          </div>
        </Stack>
      </form>
    </Modal>
  )
}

export default CustomersForm
