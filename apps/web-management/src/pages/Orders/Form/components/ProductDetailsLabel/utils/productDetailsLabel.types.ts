import { IProduct } from '../../../OrdersForm'

export interface IProductDetailsLabelProps {
  label: IProductDetailsLabel
  details: IProduct
  onRemove: () => void
}

export interface IProductDetailsLabel {
  text: string
  price: string
}
