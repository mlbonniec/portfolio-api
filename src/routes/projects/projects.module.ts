import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from '@routes/projects/projects.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ProjectEntity } from '@objects/projects/project.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature([
      ProjectEntity
    ])
  ],
  providers: [
    ProjectsService
  ],
  controllers: [
    ProjectsController
  ]
})
export class ProjectsModule {}
