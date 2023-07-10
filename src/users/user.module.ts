import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { UsersRepository } from './repository/user.repository';
import { PrismaUserRepository } from './repository/implementations/prismaUsers.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
  ],
  exports: [
    UsersService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
  ],
})
export class UserModule {}
