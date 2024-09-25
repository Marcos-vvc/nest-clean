import { IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string

  @IsOptional()
  updatedAt?: Date

  constructor(name: string, email: string, password: string, updatedAt?: Date) {
    this.name = name ?? ''
    this.email = email ?? ''
    this.password = password ?? ''
    this.updatedAt = updatedAt ?? new Date()
  }
}
