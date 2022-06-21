import 'reflect-metadata'

import express from 'express'
import cors from 'cors'

import { customersController } from './controllers/customers.controller'

export const app = express()

/**
 * @description Middlewares
 */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/**
 * @description Routes
 */
app.use('/api/customers', customersController)
