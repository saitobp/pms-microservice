import { Router } from "express";

import { MainDataSource } from "../connections";

import { PizzaCategories } from "../entities/Pizza/PizzaCategories";

const router = Router()
const pizzaCategoriesRepository = MainDataSource.getRepository(PizzaCategories)

export const productsPizzaController = () => {
  router.get('/categories',async (req, res, next) => {
    const data = await pizzaCategoriesRepository.find();
    
    res.json({ data })
  })

  return router
}