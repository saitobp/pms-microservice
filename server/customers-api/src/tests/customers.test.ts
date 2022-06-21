import request from 'supertest'
import { Repository } from 'typeorm'

import { app } from '../app'
import { db } from '../database'

import { Customer } from '../models/Customer'

let customerRepository: Repository<Customer>

describe('CRUD for Customers', () => {
  const seedCustomer = async () => {
    const customer = new Customer(
      'Customer 01',
      'Phone 01',
      'Address 01',
      '5e62a582-b4c7-40e5-a35c-4390202f2fb3',
    )

    return await customerRepository.save([customer])
  }

  beforeEach(async () => {
    await db.initialize()

    customerRepository = db.getRepository(Customer)
  })

  afterEach(async () => {
    await db.destroy()
  })

  it('Should return a list of Customers', async () => {
    await seedCustomer()

    const response = await request(app).get('/api/customers')
    const results = response.body as Customer[]

    expect(response.statusCode).toBe(200)
    expect(results.length).toBe(1)
    expect(results[0].name).toBe('Customer 01')
    expect(results[0].phone).toBe('Phone 01')
    expect(results[0].address).toBe('Address 01')
    expect(results[0].id).toBe('5e62a582-b4c7-40e5-a35c-4390202f2fb3')
  })

  it("Should return a existing by it's id", async () => {
    await seedCustomer()

    const id = '5e62a582-b4c7-40e5-a35c-4390202f2fb3'
    const response = await request(app).get(`/api/customers/${id}`)
    const results = response.body as Customer

    expect(response.statusCode).toBe(200)
    expect(results.name).toBe('Customer 01')
    expect(results.phone).toBe('Phone 01')
    expect(results.address).toBe('Address 01')
    expect(results.id).toBe('5e62a582-b4c7-40e5-a35c-4390202f2fb3')
  })

  it('Should create a new Customer', async () => {
    const customer = new Customer('Customer 01', 'Phone 01', 'Address 01')

    const response = await request(app).post('/api/customers').send(customer)
    const results = response.body as Customer

    expect(response.statusCode).toBe(201)
    expect(results.name).toBe('Customer 01')
    expect(results.phone).toBe('Phone 01')
    expect(results.address).toBe('Address 01')
    expect(results.id).toBeDefined()
  })

  it('Should update a existing Customer', async () => {
    await seedCustomer()

    const id = '5e62a582-b4c7-40e5-a35c-4390202f2fb3'
    const customer = new Customer('Customer 02', 'Phone 02', 'Address 02')

    const response = await request(app)
      .put(`/api/customers/${id}`)
      .send(customer)
    const results = response.body as Customer

    expect(response.statusCode).toBe(200)
    expect(results.name).toBe('Customer 02')
    expect(results.phone).toBe('Phone 02')
    expect(results.address).toBe('Address 02')
    expect(results.id).toBe('5e62a582-b4c7-40e5-a35c-4390202f2fb3')
  })

  it('Should remove a existing Customer', async () => {
    await seedCustomer()

    const id = '5e62a582-b4c7-40e5-a35c-4390202f2fb3'
    const response = await request(app).delete(`/api/customers/${id}`)

    expect(response.statusCode).toBe(204)
  })
})
