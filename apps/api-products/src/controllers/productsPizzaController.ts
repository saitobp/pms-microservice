import { Router } from 'express'

import { MainDataSource } from '../connections'

import { PizzaCategories } from '../entities/Pizza/PizzaCategories'
import { Pizza, PizzaStatus } from '../entities/Pizza'

const router = Router()
const pizzaCategoriesRepository = MainDataSource.getRepository(PizzaCategories)
const pizzaRepository = MainDataSource.getRepository(Pizza)

export const productsPizzaController = () => {
  router.post('/', async (req, res, next) => {
    const request = req.body as Pizza

    const pizza = new Pizza()

    console.log('request', request)

    pizza.title = request.title
    pizza.category = request.category
    pizza.small = parseFloat(request.small.toString())
    pizza.medium = parseFloat(request.medium.toString())
    pizza.large = parseFloat(request.large.toString())
    pizza.status = PizzaStatus.AVAILABLE

    await pizzaRepository.save(pizza)
    console.log('pizza', pizza)

    res.sendStatus(201)
  })

  router.get('/categories', async (req, res, next) => {
    const data = await pizzaCategoriesRepository.find()

    res.json({ data })
  })

  return router
}
