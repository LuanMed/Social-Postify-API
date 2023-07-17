import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  dateToPublish: string;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;

  @IsNumber()
  userId: number;
}
