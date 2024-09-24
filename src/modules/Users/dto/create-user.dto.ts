import { Transform } from 'class-transformer'
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  id: number

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsOptional()
  updatedAt?: Date

  constructor(id: number, email: string, password: string, updatedAt?: Date) {
    this.id = id ?? 0
    this.email = email ?? ''
    this.password = password ?? ''
    this.updatedAt = updatedAt ?? new Date()
  }
}
