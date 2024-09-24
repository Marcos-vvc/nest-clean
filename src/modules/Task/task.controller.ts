import { Body, Controller, Post } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { TaksService } from './task.service'

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaksService) {}

  @Post('create-task')
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.create(createTaskDto)
  }
}
