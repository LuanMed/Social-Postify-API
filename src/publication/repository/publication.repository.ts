import { Publication } from '@prisma/client';
import { CreatePublicationDTO } from '../dto/create-publication.dto';

export abstract class PublicationRepository {
  abstract createPubli(data: CreatePublicationDTO): Promise<Publication>;
  abstract findAllPublis(id: number): Promise<Publication[]>;
}
