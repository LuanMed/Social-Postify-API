import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUserRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDTO): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
