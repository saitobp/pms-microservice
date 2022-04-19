import { IApiListResult } from './common.types'

export interface ICustomer {
  id: string
  name: string
  address: string
  phone: string
}

export type ICustomerListResult = IApiListResult<ICustomer>

export type ICustomerFormRequest = Omit<ICustomer, 'id'>
