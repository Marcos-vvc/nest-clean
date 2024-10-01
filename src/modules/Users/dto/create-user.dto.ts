import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsEmail()
  email: string

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
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
