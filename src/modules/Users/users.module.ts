import { forwardRef, Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersController } from './users.controller'
import { UserRepository } from './repository/users.repository'
import { UsersService } from './users.service'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [PrismaService, UserRepository, UsersService],
  exports: [UserRepository],
})
export class UsersModule {}
