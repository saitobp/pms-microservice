import { DataSource } from 'typeorm'
import { PizzaCategories } from './entities/Pizza/PizzaCategories'

export const MainDataSource = new DataSource({
  type: 'postgres',
  name: 'products',
  url: 'postgres://saitoAdmin:password@host.docker.internal:9000/db-products',
  synchronize: true,
  logging: false,
  entities: [PizzaCategories]
})