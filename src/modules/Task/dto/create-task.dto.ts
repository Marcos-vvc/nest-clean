import { Transform } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateTaskDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  id: number

  @IsString()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @Transform(({ value }) => Number(value))
  userId: number

  @IsBoolean()
  completed: boolean

  @IsOptional()
  updatedAt?: Date

  constructor(
    id: number,
    title: string,
    description: string,
    userId: number,
    completed: boolean,
    updatedAt?: Date,
  ) {
    this.id = id ?? 0
    this.title = title ?? ''
    this.description = description ?? ''
    this.userId = userId ?? 0
    this.completed = completed ?? false
    this.updatedAt = updatedAt ?? new Date()
  }
}
