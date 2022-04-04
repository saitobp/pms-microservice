import { Router } from 'express'

import { Database } from '../database/database'

import { Customer } from '../models/Customer'

const customerRepository = Database.getRepository(Customer)

const customerController = Router()

customerController.get('/', async (req, res) => {
  const data = await customerRepository.find()

  res.json({ data })
})

export { customerController }
