import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PizzaCategories {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({type: 'text'})
  public category: string

  constructor (id: string, category: string) {
    this.id = id
    this.category = category
  }
}