import { Injectable } from '@nestjs/common'
import { TaskRepository } from './repository/task.repository'
import { CreateTaskDto } from './dto/create-task.dto'

@Injectable()
export class TaksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.taskRepository.create(createTaskDto)
  }
}
