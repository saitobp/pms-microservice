import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({type: 'text'})
  name: string

  @Column({type: 'text'})
  quantity: number
}