import { Injectable } from '@nestjs/common'
import { UserRepository } from './repository/users.repository'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const userExists = await this.userRepository.findByEmail(
      createUserDto.email,
    )
    if (userExists) {
      throw new Error('Email already registered')
    }
    return await this.userRepository.create(createUserDto)
  }

  async findById(id: number) {
    const validateOfId = await this.userRepository.findById(id)

    if (!validateOfId) {
      throw new Error('User not found')
    }
  }
}
