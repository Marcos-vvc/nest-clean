import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { TaskController } from './task.controller'
import { TaksService } from './task.service'
import { TaskRepository } from './repository/task.repository'

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [PrismaService, TaksService, TaskRepository],
})
export class TaskModule {}
