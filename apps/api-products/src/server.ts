import 'reflect-metadata'
import express from 'express'
import { Application } from 'express'
import { createConnection } from 'typeorm'
import { productsController } from './controllers/productsController'

import { Products } from './entity/Products'

const app: Application = express()
const port: number = 5000 || process.env.PORT

createConnection({
  type: 'postgres',
  name: 'products',
  url: 'postgres://saitoAdmin:password@host.docker.internal:9000/db-products',
  synchronize: true,
  logging: false,
  entities: [Products],
  migrations: ['./migration/**/*.js'],
  subscribers: ['./subscribers/**/*.js'],
})
  .then(async connection => {
    const productsRouter = productsController(connection)

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/api/products', productsRouter)

    try {
      app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (error: any) {
      console.error(`Error occured: ${error.message}`)
    }
  })
  .catch(error => {
    console.error(`Error occured: ${error.message}`)
  })
