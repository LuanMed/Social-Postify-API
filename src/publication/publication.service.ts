import { Injectable } from '@nestjs/common';
import { PublicationRepository } from './repository/publication.repository';
import { User } from '@prisma/client';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async findAllPublis(id: number) {
    return await this.publicationRepository.findAllPublis(id);
  }
  async createPubli(user: User, body: any) {
    body = { ...body, userId: user.id };
    return await this.publicationRepository.createPubli(body);
  }
}
