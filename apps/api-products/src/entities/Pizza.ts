import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pizza {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'text' })
  public title: string

  @Column({ type: 'text' })
  public category: PizzaCategory

  @Column({ type: 'float' })
  public small: number

  @Column({ type: 'float' })
  public medium: number

  @Column({ type: 'float' })
  public large: number

  @Column({ type: 'text' })
  public status: PizzaStatus
}

export enum PizzaCategory {
  SAVOURY = 'SAVOURY',
  SWEET = 'SWEET',
}

export enum PizzaStatus {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
}
