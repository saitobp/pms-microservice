import request from 'supertest'
import { Repository } from 'typeorm'

import { app } from '../app'

import { Database } from '../database/database'

import { Customer } from '../models/Customer'

import {
  ICustomerCreateRequest,
  ICustomerUpdateRequest,
} from '../types/customer.types'
import { IApiResult } from '../types/commons.types'

let customerRepository: Repository<Customer>

describe('Test CRUD for Customers', () => {
  const seedCustomer = async () => {
    const customer = new Customer('Customer Test', 'Phone Test', 'Address Test')

    return await customerRepository.save([customer])
  }

  beforeEach(async () => {
    await Database.initialize()

    customerRepository = Database.getRepository(Customer)
  })

  afterEach(async () => {
    await Database.destroy()
  })

  /* HTTP GET / */
  it('Should return a list of Customers', async () => {
    await seedCustomer()

    const response = await request(app).get('/api/customers')
    const results = response.body as IApiResult<Customer>

    expect(response.statusCode).toBe(200)
    expect(results.data.length).toBe(1)
    expect(results.data[0].name).toBe('Customer Test')
    expect(results.data[0].phone).toBe('Phone Test')
    expect(results.data[0].address).toBe('Address Test')
  })

  /* HTTP POST / */
  it('Should be able to create a new Customer', async () => {
    const body: ICustomerCreateRequest = {
      name: 'Customer Post Test',
      address: 'Address Post Test',
      phone: 'Phone Post Test',
    }

    const response = await request(app).post('/api/customers').send(body)
    const results = response.body as Customer

    expect(response.statusCode).toBe(201)
    expect(results.name).toBe('Customer Post Test')
    expect(results.address).toBe('Address Post Test')
    expect(results.phone).toBe('Phone Post Test')
  })

  /* HTTP GET /{id} */
  it('Should return a Customer based on its id', async () => {
    const customers = await seedCustomer()
    const { id } = customers[0]

    const response = await request(app).get(`/api/customers/${id}`)
    const results = response.body as Customer

    expect(response.statusCode).toBe(200)
    expect(results.id).toBe(id)
    expect(results.name).toBe('Customer Test')
    expect(results.address).toBe('Address Test')
    expect(results.phone).toBe('Phone Test')
  })

  /* HTTP PUT /{id} */
  it('Should be able to update a existing Customer by its id', async () => {
    const customers = await seedCustomer()
    const { id } = customers[0]

    const body: ICustomerUpdateRequest = {
      name: 'Customer Put Test',
      address: 'Address Put Test',
      phone: 'Phone Put Test',
    }

    const response = await request(app).put(`/api/customers/${id}`).send(body)
    const results = response.body as Customer

    expect(response.statusCode).toBe(200)
    expect(results.id).toBe(id)
    expect(results.name).toBe('Customer Put Test')
    expect(results.address).toBe('Address Put Test')
    expect(results.phone).toBe('Phone Put Test')
  })

  /* HTTP DELETE /{id} */
  it('Should remove an existing Customer by its id', async () => {
    const customers = await seedCustomer()
    const { id } = customers[0]

    const response = await request(app).delete(`/api/customers/${id}`)
    const results = await customerRepository.find()

    expect(response.statusCode).toBe(200)
    expect(results.length).toBe(0)
  })
})
