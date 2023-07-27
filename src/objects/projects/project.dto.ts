import { ProjectEntity } from '@objects/projects/project.entity';
import {
  IsAlphanumeric,
  IsBoolean,
  IsDateString,
  IsLowercase, IsMongoId,
  IsNotEmpty, IsOptional,
  IsString,
  IsUrl,
  Length
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class ProjectByIdDto {
  @IsMongoId()
  id: string;
}

export class CreateProjectDto implements Omit<ProjectEntity, '_id'> {
  @ApiProperty({ description: 'Project slug.' })
  @IsString()
  @IsLowercase()
  @IsAlphanumeric('en-US')
  slug: string;

  @ApiProperty({ description: 'Project name.' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Project description.' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Project visibility.', required: false, default: true })
  @IsOptional()
  @IsBoolean()
  visible: boolean = true;

  @ApiProperty({ description: 'Project preview.', minimum: 100, maximum: 168 })
  @IsString()
  @Length(100, 168)
  preview: string;

  @ApiProperty({ description: 'Project content as markdown.' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'Describe if the project is still maintained' })
  @IsBoolean()
  maintained: boolean;

  @ApiProperty({ description: 'Project release date.' })
  @IsDateString()
  release: Date;

  @ApiProperty({ description: 'Project tags.' })
  @IsString({ each: true })
  tags: string[];

  @ApiProperty({ description: 'Project technologies.' })
  @IsString({ each: true })
  technologies: string[];

  @ApiProperty({ description: 'Project url.', required: false, default: null })
  @IsOptional()
  @IsUrl()
  url: string = null;

  @ApiProperty({ description: 'Project cover.' })
  @IsUrl()
  cover: string;

  @ApiProperty({ description: 'Project images.' })
  @IsUrl({}, { each: true })
  images: string[];
}

export class GetProjectByIdDto extends ProjectByIdDto {}

export class DeleteProjectByIdDto extends ProjectByIdDto {}
