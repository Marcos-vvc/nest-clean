import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TaskRepository {
  constructor(public readonly prismaService: PrismaService) {}

  async create(task: Prisma.TaskUncheckedCreateInput) {
    return await this.prismaService.task.create({ data: task })
  }

  async find() {
    return await this.prismaService.task.findMany()
  }

  async update(task: Prisma.TaskUpdateInput, id: number) {
    const result = await this.prismaService.task.update({
      data: task,
      where: { id },
    })
    return result
  }

  async delete(id: number) {
    return await this.prismaService.task.delete({ where: { id } })
  }
}
