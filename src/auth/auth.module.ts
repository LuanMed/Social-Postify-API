import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { PrismaUserRepository } from 'src/users/repository/implementations/prismaUsers.repository';
import { UsersService } from 'src/users/user.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
  ],
})
export class AuthModule {}
