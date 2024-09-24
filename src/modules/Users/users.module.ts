import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersController } from './users.controller'
import { UserRepository } from './repository/users.repository'
import { UsersService } from './users.service'

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [PrismaService, UserRepository, UsersService],
})
export class UsersModule {}
