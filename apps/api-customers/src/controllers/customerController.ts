import { Router } from 'express'

import { Database } from '../database/database'

import { Customer } from '../models/Customer'
import {
  ICustomerCreateRequest,
  ICustomerUpdateRequest,
} from '../types/customer.types'

const customerRepository = Database.getRepository(Customer)

const customerController = Router()

/* Get all Customers */
customerController.get('/', async (req, res) => {
  const data = await customerRepository.find()

  res.json({ data })
})

/* Create new Customer */
customerController.post('/', async (req, res) => {
  const body = req.body as ICustomerCreateRequest
  const { identifiers } = await customerRepository.insert(body)
  const data = await customerRepository.findOneBy({ id: identifiers[0].id })

  res.status(201).json(data)
})

/* Get Customer by id */
customerController.get('/:id', async (req, res) => {
  const data = await customerRepository.findOneBy({ id: req.params.id })

  res.json(data)
})

/* Update Customer by id */
customerController.put('/:id', async (req, res) => {
  const customerInDb = await customerRepository.findOneBy({ id: req.params.id })

  if (!customerInDb) {
    res.sendStatus(404).json({ message: 'Customer does not exists' })
    return
  }

  const body = req.body as ICustomerUpdateRequest
  await customerRepository.update(req.params.id, body)
  const data = await customerRepository.findOneBy({ id: req.params.id })

  res.json(data)
})

/* Delete Customer by id */
customerController.delete('/:id', async (req, res) => {
  const customerInDb = await customerRepository.findOneBy({ id: req.params.id })

  if (!customerInDb) {
    res.sendStatus(404).json({ message: 'Customer does not exists' })
    return
  }

  await customerRepository.delete(req.params.id)
  await customerRepository.findOneBy({ id: req.params.id })

  res.sendStatus(200)
})

export { customerController }
