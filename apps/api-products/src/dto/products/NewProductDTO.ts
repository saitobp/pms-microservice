import { ProductType } from "../../entities/Products"

export class NewProductDTO {
  public category: string
  public prices: any[]
  public title: string
  public type: ProductType
}