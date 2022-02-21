import { Connection } from 'typeorm'

import { Products } from '../entity/Products'

export const productsRepository = (connection: Connection) => {
  return connection.getRepository(Products)
}
