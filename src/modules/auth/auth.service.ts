import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { UserRepository } from '../Users/repository/users.repository'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    params: Prisma.UserCreateInput,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.findByEmail(params.email)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const passwordMatch = await bcrypt.compare(params.password, user.password)

    if (!passwordMatch) {
      throw new UnauthorizedException('Ivalid credentials')
    }

    const payload = { sub: user.id }

    return { access_token: await this.jwtService.signAsync(payload) }
  }
}
