import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'text' })
  public name: string

  @Column({ type: 'text' })
  public phone: string

  @Column({ type: 'text' })
  public address: string

  constructor(name: string, phone: string, address: string) {
    this.name = name
    this.phone = phone
    this.address = address
  }
}
