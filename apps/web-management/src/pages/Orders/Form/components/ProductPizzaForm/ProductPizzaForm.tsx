import { Group, Select, SelectItem } from '@mantine/core'
import { FC, useEffect, useState } from 'react'
import { PRODUCT_TYPE } from '../../../../../types/products.types'

import { sizeLabel } from './utils/productPizzaForm.constants'
import {
  saltyPizzasOptions,
  sweetPizzasOptions,
  sizes,
} from './utils/productPizzaForm.mocks'
import { IProductPizzaFormProps } from './utils/productPizzaForm.types'

const pizzaSizes: SelectItem[] = sizes.map((e) => ({
  value: e.id,
  label: sizeLabel[e.size],
}))

const saltyPizzas: SelectItem[] = saltyPizzasOptions.map((e) => ({
  value: e.id,
  label: e.name,
}))

const sweetPizzas: SelectItem[] = sweetPizzasOptions.map((e) => ({
  value: e.id,
  label: e.name,
}))

const ProductPizzaForm: FC<IProductPizzaFormProps> = (props) => {
  const { type, setLabel } = props

  const [size, setSize] = useState('')
  const [flavor1, setFlavor1] = useState('')
  const [flavor2, setFlavor2] = useState('')

  const handleOnChange = (value: string | null, position: number) => {
    if (value === null) return

    let product

    if (type === PRODUCT_TYPE.SALTY_PIZZA) {
      product = saltyPizzasOptions.find((e) => e.id === value)
    }

    if (type === PRODUCT_TYPE.SWEET_PIZZA) {
      product = sweetPizzasOptions.find((e) => e.id === value)
    }

    if (!product) return

    const size = sizes.find((e) => e.id === value)
    console.log('size', size)

    if (!size) return

    if (position === 0) {
      setSize(size.size)
    }
  }

  useEffect(() => {
    setLabel({
      text: `[${size}] ${flavor1}`,
      price: '',
    })
  }, [size, flavor1, flavor2, setLabel])

  return (
    <Group grow noWrap>
      <Select
        label='Tamanho'
        data={pizzaSizes}
        required
        onChange={(val) => handleOnChange(val, 0)}
      />

      <Select
        label='Sabor 1'
        data={type === PRODUCT_TYPE.SALTY_PIZZA ? saltyPizzas : sweetPizzas}
        required
      />

      <Select
        label='Sabor 2'
        data={type === PRODUCT_TYPE.SALTY_PIZZA ? saltyPizzas : sweetPizzas}
        disabled={type === PRODUCT_TYPE.SWEET_PIZZA}
      />
    </Group>
  )
}

export default ProductPizzaForm
