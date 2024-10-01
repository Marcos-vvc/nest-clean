import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { TaksService } from './task.service'
import { AuthGuard } from '../auth/auth.guard'
import { UpdateTaskDto } from './dto/update-task.dto'

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaksService) {}

  @Get()
  @UseGuards(AuthGuard)
  async find() {
    return this.taskService.find()
  }

  @Post('create-task')
  @UseGuards(AuthGuard)
  async create(@Request() req: any, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.sub
    return await this.taskService.create(createTaskDto, userId)
  }

  @Put('/:id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.update(updateTaskDto, id)
  }

  @Delete('/:id')
  @UseGuards(AuthGuard)
  async delete(@Param('id') id: number) {
    return await this.taskService.delete(id)
  }
}
