import { DataSource } from 'typeorm'

import { Customer } from '../models/Customer'

let Database = new DataSource({
  type: 'postgres',
  name: 'customers',
  url: 'postgres://postgres:password@database-2.cky5ttiocteg.us-east-1.rds.amazonaws.com:5432/customers',
  synchronize: true,
  logging: false,
  entities: [Customer],
})

if (process.env.NODE_ENV === 'TEST') {
  Database = new DataSource({
    type: 'postgres',
    name: 'customers',
    url: 'postgres://saitoAdmin:password@host.docker.internal:9101/db-customers-tests',
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [Customer],
  })
}

export { Database }
