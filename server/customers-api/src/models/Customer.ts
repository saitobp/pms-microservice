import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid', { name: 'Id' })
  public id?: string

  @Column({ name: 'Name', type: 'text' })
  public name: string

  @Column({ name: 'Phone', type: 'text' })
  public phone: string

  @Column({ name: 'Address', type: 'text' })
  public address: string

  constructor(name: string, phone: string, address: string, id?: string) {
    this.id = id
    this.name = name
    this.phone = phone
    this.address = address
  }

  public update(name: string, phone: string, address: string) {
    this.name = name
    this.phone = phone
    this.address = address
  }
}
