import { Module } from '@nestjs/common';
import { PublicationController } from './publication.controller';
import { PublicationService } from './publication.service';
import { PublicationRepository } from './repository/publication.repository';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublication.repository';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/user.service';
import { UsersRepository } from 'src/users/repository/user.repository';
import { PrismaUserRepository } from 'src/users/repository/implementations/prismaUsers.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    AuthService,
    UsersService,
    { provide: UsersRepository, useClass: PrismaUserRepository },
    { provide: PublicationRepository, useClass: PrismaPublicationRepository },
  ],
})
export class PublicationModule {}
