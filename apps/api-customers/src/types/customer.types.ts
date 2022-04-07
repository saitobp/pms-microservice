import { Customer } from '../models/Customer'

export type ICustomerCreateRequest = Omit<Customer, 'id'>
export type ICustomerUpdateRequest = Omit<Customer, 'id'>
