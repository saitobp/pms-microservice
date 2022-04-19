import axios, { AxiosInstance } from 'axios'
import { ICustomerFormRequest, ICustomerListResult } from '../types/customers.types'

export class CustomersApi {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5001/api/customers',
    })
  }

  public async list() {
    return await this.instance.get<any, ICustomerListResult>('/')
  }

  public async insert(values: ICustomerFormRequest) {
    return await this.instance.post('/', values)
  }

  public async findById(id: string) {
    return await this.instance.get(`/${id}`)
  }

  public async update(id: string, values: ICustomerFormRequest) {
    return await this.instance.put(`/${id}`, values)
  }
}
