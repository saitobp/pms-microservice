import { Router } from 'express'
import { Connection } from 'typeorm'
import { Products } from '../entity/Products'

import { productsRepository } from '../repository/productsRepository'

export const productsController = (connection: Connection) => {
  const router = Router()
  const repository = productsRepository(connection)

  router.get('/', async (req, res, next) => {
    const data = await repository.find()

    res.json({ data })
  })

  router.post('/', async (req, res, next) => {
    const body: Products = req.body
    await repository.save(body)

    return res.sendStatus(201)
  })

  return router
}
