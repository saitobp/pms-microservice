import { DataSource } from 'typeorm'

import { entities } from './entities'

let db = new DataSource({
  type: 'postgres',
  name: 'customers',
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: entities,
})

if (process.env.NODE_ENV === 'TEST') {
  db = new DataSource({
    type: 'sqlite',
    name: 'customers',
    database: ':memory:',
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: entities,
  })
}

export { db }
