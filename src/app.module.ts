import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { UsersModule } from './modules/Users/users.module'
import { TaskModule } from './modules/Task/task.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [UsersModule, TaskModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
