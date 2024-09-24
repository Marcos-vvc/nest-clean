import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserRepository {
  constructor(public readonly prismaService: PrismaService) {}

  async create(user: Prisma.UserCreateInput) {
    return await this.prismaService.user.create({ data: user })
  }

  async findByEmail(email: string) {
    const data = await this.prismaService.user.findFirst({ where: { email } })

    return data
  }

  async findById(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } })
  }
}
