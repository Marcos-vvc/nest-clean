import { Injectable } from '@nestjs/common'
import { UserRepository } from './repository/users.repository'
import * as bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client'
import { FindUserDto } from './dto/find-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10)

    return await this.userRepository.create({
      ...createUserDto,
      password: hashPassword,
    })
  }

  async find(query: FindUserDto) {
    const { id, name, email } = query

    const where: Prisma.UserWhereInput = {
      ...(id ? { id } : {}),
      ...(name ? { name: { contains: name } } : {}),
      ...(email ? { email: { contains: email } } : {}),
    }
    const findManyArgs: Prisma.UserFindManyArgs = {
      where,
    }
    return await this.userRepository.find(findManyArgs)
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
