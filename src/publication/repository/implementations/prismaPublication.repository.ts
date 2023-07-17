import { Injectable } from '@nestjs/common';
import { PublicationRepository } from '../publication.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDTO } from 'src/publication/dto/create-publication.dto';
import { Publication } from '@prisma/client';

@Injectable()
export class PrismaPublicationRepository implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPubli(data: CreatePublicationDTO): Promise<Publication> {
    return await this.prisma.publication.create({ data });
  }

  async findAllPublis(id: number): Promise<Publication[]> {
    return await this.prisma.publication.findMany({ where: { id } });
  }
}
