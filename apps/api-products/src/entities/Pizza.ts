import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Pizza {
  @PrimaryColumn('uuid')
  public id: string

  @Column({type: 'text'})
  public category: string
}

export enum PizzaCategories {
  SAVOURY = 'savoury',
  SWEET = 'sweet'
}

export enum PizzaSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}