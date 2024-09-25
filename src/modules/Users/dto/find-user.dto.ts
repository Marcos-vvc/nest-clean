import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class FindUserDto {
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  id: number

  @IsString()
  name: string

  @IsString()
  email: string

  constructor(id: number, name: string, email: string) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.email = email ?? ''
  }
}
