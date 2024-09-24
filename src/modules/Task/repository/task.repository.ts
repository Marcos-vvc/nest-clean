import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TaskRepository {
  constructor(public readonly prismaService: PrismaService) {}

  async create(task: Prisma.TaskUncheckedCreateInput) {
    return await this.prismaService.task.create({ data: task })
  }
}
