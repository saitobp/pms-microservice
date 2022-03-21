import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { Application } from 'express'

// import { Products } from './entities/Products'
import { MainDataSource } from './connections'
import { seeds } from './seeds/seeds'

import { productsController } from './controllers/productsController'
import { productsPizzaController } from './controllers/productsPizzaController'

const app: Application = express()
const port: number = 5000 || process.env.PORT

MainDataSource.initialize()
  .then(async () => {
    await seeds()

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api/products', productsController())
    app.use('/api/products/pizzas', productsPizzaController())

    try {
      app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (error: any) {
      console.error(`Error occured: ${error.message}`)
    }
  })
  .catch(error => {
    console.error(`Error occured: ${error.message}`)
  })
