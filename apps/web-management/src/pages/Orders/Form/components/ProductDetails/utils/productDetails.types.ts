import { IProduct } from '../../../OrdersForm'

export interface IProductDetailsProps {
  index: number
  details: IProduct
  onRemove: () => void
}
