import { Dispatch, SetStateAction } from 'react'
import { PRODUCT_TYPE } from '../../../../../../types/products.types'

import { IProductDetailsLabel } from '../../ProductDetailsLabel/utils/productDetailsLabel.types'

export interface IProductPizzaFormProps {
  type: PRODUCT_TYPE
  setLabel: Dispatch<SetStateAction<IProductDetailsLabel>>
}
