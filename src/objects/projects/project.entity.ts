import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { GlobalRepository } from '@/repositories/global.repository';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ collection: 'projects', customRepository: () => GlobalRepository })
export class ProjectEntity {
  @ApiProperty({ description: 'The id of the project', name: 'id', type: 'string' })
  @PrimaryKey()
  readonly _id: ObjectId;

  @ApiProperty({ description: 'The name of the project' })
  @Property()
  name: string;
}
