import { Injectable, UnauthorizedException } from '@nestjs/common'
import { TaskRepository } from './repository/task.repository'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

@Injectable()
export class TaksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto, userId: number) {
    if (!userId) {
      throw new UnauthorizedException('User ID not found')
    }
    const task = await this.taskRepository.create({
      ...createTaskDto,
      userId,
    })

    return {
      ...task,
      createdAt: dayjs(task.createdAt)
        .locale('pt-br')
        .format('DD/MM/YYYY HH:mm:ss'),
      updatedAt: dayjs(task.updatedAt)
        .locale('pt-br')
        .format('DD/MM/YYYY HH:mm:ss'),
    }
  }

  async find() {
    const tasks = await this.taskRepository.find()

    return tasks.map((task) => ({
      ...task,
      createdAt: dayjs(task.createdAt)
        .locale('pt-br')
        .format('DD/MM/YYYY HH:mm:ss'),
      updatedAt: dayjs(task.updatedAt)
        .locale('pt-br')
        .format('DD/MM/YYYY HH:mm:ss'),
    }))
  }

  async update(updateTaskDto: UpdateTaskDto, id: number) {
    return await this.taskRepository.update(updateTaskDto, id)
  }

  async delete(id: number) {
    await this.taskRepository.delete(id)
  }
}
