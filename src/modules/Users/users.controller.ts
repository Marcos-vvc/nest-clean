import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { AuthGuard } from '../auth/auth.guard'
import { FindUserDto } from './dto/find-user.dto'

@Controller('/user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create-user')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto)
  }

  @Get()
  async find(@Query() findUserFilters: FindUserDto) {
    return await this.usersService.find(findUserFilters)
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.findById(id)
  }
}
