import { Router } from 'express'

import { db } from '../database'

import { Customer } from '../models/Customer'

const customersRepository = db.getRepository(Customer)
export const customersController = Router()

/**
 * @description Return a list of Customers
 */
customersController.get('/', async (_req, res) => {
  const customers = await customersRepository.find()

  return res.json(customers)
})

/**
 * @description Return a existing Customer by it's Id
 */
customersController.get('/:id', async (req, res) => {
  const { id } = req.params
  const customer = await customersRepository.findOne({ where: { id } })

  return res.json(customer)
})

/**
 * @description Create a new Customer and return statusCode 201
 */
customersController.post('/', async (req, res) => {
  const { name, phone, address } = req.body
  const customer = new Customer(name, phone, address)

  await customersRepository.save(customer)

  return res.status(201).json(customer)
})

/**
 * @description Update a existing Customer by it's Id
 */
customersController.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, phone, address } = req.body
  const customer = await customersRepository.findOne({ where: { id } })

  if (!customer) return

  customer.update(name, phone, address)

  await customersRepository.save(customer)

  return res.json(customer)
})

/**
 * @description Remove a existing Customer by it's Id
 */
customersController.delete('/:id', async (req, res) => {
  const { id } = req.params
  const customer = await customersRepository.findOne({ where: { id } })

  if (!customer) return

  await customersRepository.remove(customer)

  return res.status(204).send()
})
