import { Injectable, UnauthorizedException } from '@nestjs/common'
import { TaskRepository } from './repository/task.repository'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TaksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto, userId: number) {
    if (!userId) {
      throw new UnauthorizedException('User ID not found')
    }
    return await this.taskRepository.create({ ...createTaskDto, userId })
  }

  async find() {
    return await this.taskRepository.find()
  }

  async update(updateTaskDto: UpdateTaskDto, id: number) {
    return await this.taskRepository.update(updateTaskDto, id)
  }

  async delete(id: number) {
    await this.taskRepository.delete(id)
  }
}
