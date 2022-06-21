import { Dispatch, SetStateAction } from 'react'

import { IProductDetailsLabel } from '../../ProductDetailsLabel/utils/productDetailsLabel.types'

export interface IProductDrinkFormProps {
  setLabel: Dispatch<SetStateAction<IProductDetailsLabel>>
}
