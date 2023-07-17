import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from 'src/auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createPubli(@UserRequest() user: User, @Body() body: any) {
    return this.publicationService.createPubli(user, body);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAllPublis(id: number) {
    return this.publicationService.findAllPublis(id);
  }
}
