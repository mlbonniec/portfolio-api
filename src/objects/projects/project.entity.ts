import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { GlobalRepository } from '@/repositories/global.repository';

@Entity({ collection: 'projects', customRepository: () => GlobalRepository })
export class ProjectEntity {
  @PrimaryKey()
  readonly _id: ObjectId;

  @Property()
  name: string;
}
