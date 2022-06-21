import { FC } from 'react'
import { Select, SelectItem } from '@mantine/core'

import { productDrinkFormOptions } from './utils/productDrinkForm.mocks'
import { IProductDrinkFormProps } from './utils/productDrinkForm.types'

const options: SelectItem[] = productDrinkFormOptions.map((e) => ({
  label: e.name,
  value: e.id,
}))

const ProductDrinkForm: FC<IProductDrinkFormProps> = (props) => {
  const { setLabel } = props

  const handleOnChange = (value: string) => {
    const product = productDrinkFormOptions.find((e) => e.id === value)

    if (!product) return

    setLabel({
      text: product.name,
      price: product.price,
    })
  }

  return (
    <Select
      label='Bebida'
      data={options}
      required
      searchable
      style={{ width: '100%' }}
      onChange={handleOnChange}
    />
  )
}

export default ProductDrinkForm
