import { TaksEntity } from 'src/modules/Task/entities/taks.entity'

export class UserEntity {
  id: number
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt?: Date

  task?: TaksEntity

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt?: Date,
    task?: TaksEntity,
  ) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.email = email ?? ''
    this.password = password ?? ''
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()
    this.task = task
  }
}
