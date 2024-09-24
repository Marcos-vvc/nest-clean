import { TaksEntity } from 'src/modules/Task/entities/taks.entity'

export class UserEntity {
  id: number
  email: string
  password: string
  createdAt: Date
  updatedAt?: Date

  task?: TaksEntity

  constructor(
    id: number,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt?: Date,
    task?: TaksEntity,
  ) {
    this.id = id ?? 0
    this.email = email ?? ''
    this.password = password ?? ''
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()
    this.task = task
  }
}
