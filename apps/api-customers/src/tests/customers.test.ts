import request from 'supertest'
import { Repository } from 'typeorm'

import { app } from '../app'

import { Database } from '../database/database'

import { Customer } from '../models/Customer'

let customerRepository: Repository<Customer>

interface IApiResult<T> {
  data: T[]
}

describe('Test CRUD for Customers', () => {
  beforeEach(async () => {
    await Database.initialize()

    customerRepository = Database.getRepository(Customer)
  })

  afterEach(async () => {
    await Database.destroy()
  })

  /* HTTP GET / */
  it('Should return a list of Customers', async () => {
    const C1 = new Customer('C1', '001', 'C1Address')
    await customerRepository.save([C1])

    const response = await request(app).get('/api/customers')
    const body = response.body as IApiResult<Customer>

    expect(response.statusCode).toBe(200)
    expect(body.data.length).toBe(1)
    expect(body.data[0].name).toBe('C1')
    expect(body.data[0].phone).toBe('001')
    expect(body.data[0].address).toBe('C1Address')
  })

  /* HTTP POST / */
  /* HTTP GET /{id} */
  /* HTTP PUT /{id} */
  /* HTTP DELETE /{id} */
})
