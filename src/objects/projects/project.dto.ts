import { ProjectEntity, ProjectImage } from '@objects/projects/project.entity';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsSlug } from '@decorators/is-slug';

class ProjectByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

class CreateProjectImageDto implements ProjectImage {
  @ApiProperty({ description: 'The image url.' })
  @IsUrl()
  url: string;

  @ApiProperty({ description: 'The image caption.' })
  @IsString()
  caption: string;
}

export class CreateProjectDto implements Omit<ProjectEntity, '_id' | 'images'> {
  @ApiProperty({ description: 'Project slug.' })
  @IsSlug()
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

  @ApiProperty({ description: 'Project date.' })
  @IsDateString()
  date: Date;

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
  @ValidateNested({ each: true })
  @Type(() => CreateProjectImageDto)
  images: CreateProjectImageDto[];

  @ApiProperty({ description: 'Project order.' })
  @IsNumber()
  order: number;
}

export class GetProjectByIdDto extends ProjectByIdDto {}

export class DeleteProjectByIdDto extends ProjectByIdDto {}
