import { Router } from 'express'
import { MainDataSource } from '../connections'

import { NewProductDTO } from '../dto/products/NewProductDTO'

import { Products } from '../entities/Products'

const productsRepository = MainDataSource.getRepository(Products)

export const productsController = () => {
  const router = Router()

  router.get('/', async (req, res, next) => {
    const data = await productsRepository.find()

    res.json({ data })
  })

  router.post('/', async (req, res, next) => {
    const body: NewProductDTO = req.body
    // await _productsRepository.save(body)

    console.log(body)

    return res.sendStatus(201)
  })

  return router
}
