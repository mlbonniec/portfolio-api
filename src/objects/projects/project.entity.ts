import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { GlobalRepository } from '@/repositories/global.repository';
import { ApiProperty, PickType } from '@nestjs/swagger';

@Embeddable()
export class ProjectImage {
  @ApiProperty({ description: 'The image url.' })
  @Property()
  url: string;

  @ApiProperty({ description: 'The image caption.' })
  @Property()
  caption: string;
}

@Entity({ collection: 'projects', repository: () => GlobalRepository })
export class ProjectEntity {
  @ApiProperty({ description: 'The id of the project.', name: 'id', type: 'string' })
  @PrimaryKey()
  readonly _id: ObjectId;

  @ApiProperty({ description: 'The slug of the project.' })
  @Property({ unique: true })
  slug: string;

  @ApiProperty({ description: 'The name of the project.' })
  @Property()
  name: string;

  @ApiProperty({ description: 'The description of the project.' })
  @Property()
  description: string;

  @ApiProperty({ description: 'Describe if the project is visible.' })
  @Property()
  visible: boolean;

  @ApiProperty({ description: 'The preview of the project.' })
  @Property()
  preview: string;

  @ApiProperty({ description: 'The content of the project.' })
  @Property()
  content: string;

  @ApiProperty({ description: 'Describe if the project is still maintained.' })
  @Property()
  maintained: boolean;

  @ApiProperty({ description: 'The date of the project.' })
  @Property()
  date: Date;

  @ApiProperty({ description: 'The tags of the project.' })
  @Property()
  tags: string[];

  @ApiProperty({ description: 'The technologies used in the project.' })
  @Property()
  technologies: string[];

  @ApiProperty({ description: 'The url of the project.', nullable: true })
  @Property({ nullable: true })
  url: string;

  @ApiProperty({ description: 'The cover of the project.' })
  @Property()
  cover: string;

  @ApiProperty({ description: 'The images of the project.', type: ProjectImage, isArray: true })
  @Embedded(() => ProjectImage, { array: true })
  images: ProjectImage[];
}

/**
 * @description The keys of the project entity that are used in the short project entity.
 */
export const shortProjectKeys: (keyof ProjectEntity)[] = ['slug', 'name', 'description', 'preview', 'date', 'cover', 'maintained'];
export class ShortProjectEntity extends PickType(ProjectEntity, shortProjectKeys) {}
