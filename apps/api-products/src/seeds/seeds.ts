import { MainDataSource } from '../connections'
import { PizzaCategories } from '../entities/Pizza/PizzaCategories'

export const seeds = async () => {
  const PizzaCategoriesRepository = MainDataSource.getRepository(PizzaCategories)

  await PizzaCategoriesRepository.save([
    new PizzaCategories('2f8ed753-5c5a-4fdd-a7f2-1a05811c5e72', 'SAVOURY'),
    new PizzaCategories('b53a994a-c32a-4801-ae93-702048429f93', 'SWEET'),
  ])
}
