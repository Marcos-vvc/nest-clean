import { UserEntity } from 'src/modules/Users/entities/user.entity'

export class TaksEntity {
  id: number
  title: string
  description?: string
  completed: boolean
  userId: number
  createdAt: Date
  updatedAt?: Date

  user?: UserEntity

  constructor(
    id: number,
    title: string,
    completed: boolean,
    userId: number,
    createdAt: Date,
    description?: string,
    updatedAt?: Date,
    user?: UserEntity,
  ) {
    this.id = id ?? 0
    this.title = title ?? ''
    this.description = description ?? ''
    this.completed = completed ?? false
    this.userId = userId ?? 0
    this.createdAt = createdAt ?? new Date()
    this.updatedAt = updatedAt ?? new Date()
    this.user = user
  }
}
