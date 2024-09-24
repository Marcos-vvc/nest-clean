import { Injectable } from '@nestjs/common'
import { UserRepository } from './repository/users.repository'
import { CreateUserDto } from './dto/create-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10)

    return await this.userRepository.create({
      ...createUserDto,
      password: hashPassword,
    })
  }

  async findByEmail(email: string) {
    const data = await this.userRepository.findByEmail(email)

    if (data) {
      throw new Error('Email already registered')
    }
  }

  async findById(id: number) {
    const validateOfId = await this.userRepository.findById(id)

    if (!validateOfId) {
      throw new Error('User not found')
    }
  }
}
