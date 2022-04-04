import 'reflect-metadata'
import express, { Application } from 'express'
import cors from 'cors'

import { customerController } from './controllers/customerController'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Routes */
app.use('/api/customers', customerController)

export { app }
