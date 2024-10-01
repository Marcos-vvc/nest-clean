import { BadRequestException, Injectable } from '@nestjs/common'
import { UserRepository } from './repository/users.repository'
import * as bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client'
import { FindUserDto } from './dto/find-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10)

    const existingUser = await this.userRepository.findByEmail(
      createUserDto.email,
    )
    if (existingUser) {
      throw new BadRequestException('Email is already in use')
    }

    const createUser = await this.userRepository.create({
      ...createUserDto,
      password: hashPassword,
    })

    return createUser
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
    return await this.userRepository.findByEmail(email)
  }

  async findById(id: number) {
    const validateOfId = await this.userRepository.findById(id)

    if (!validateOfId) {
      throw new Error('User not found')
    }
  }
}
