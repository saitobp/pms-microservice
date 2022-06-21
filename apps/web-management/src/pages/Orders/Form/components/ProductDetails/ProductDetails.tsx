import { FC, useState } from 'react'
import { Accordion } from '@mantine/core'

import { PRODUCT_TYPE } from '../../../../../types/products.types'

import { ProductDetailsLabel } from '../ProductDetailsLabel'
import { ProductDrinkForm } from '../ProductDrinkForm'
import { ProductPizzaForm } from '../ProductPizzaForm'

import { IProductDetailsProps } from './utils/productDetails.types'
import { IProductDetailsLabel } from '../ProductDetailsLabel/utils/productDetailsLabel.types'

const ProductDetails: FC<IProductDetailsProps> = (props) => {
  const { details, onRemove } = props

  const [productLabel, setProductLabel] = useState<IProductDetailsLabel>({
    text: '',
    price: '',
  })

  return (
    <Accordion offsetIcon={false}>
      <Accordion.Item
        label={
          <ProductDetailsLabel
            label={productLabel}
            details={details}
            onRemove={onRemove}
          />
        }
      >
        {details.type === PRODUCT_TYPE.DRINK && (
          <ProductDrinkForm setLabel={setProductLabel} />
        )}

        {details.type === PRODUCT_TYPE.SALTY_PIZZA && (
          <ProductPizzaForm setLabel={setProductLabel} type={details.type} />
        )}

        {details.type === PRODUCT_TYPE.SWEET_PIZZA && (
          <ProductPizzaForm setLabel={setProductLabel} type={details.type} />
        )}
      </Accordion.Item>
    </Accordion>
  )
}

export default ProductDetails
