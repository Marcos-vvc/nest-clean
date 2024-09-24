import { Transform } from 'class-transformer'
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  id: number

  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsOptional()
  updatedAt?: Date

  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    updatedAt?: Date,
  ) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.email = email ?? ''
    this.password = password ?? ''
    this.updatedAt = updatedAt ?? new Date()
  }
}
