import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from '@routes/projects/projects.controller';

@Module({
  providers: [
    ProjectsService
  ],
  controllers: [
    ProjectsController
  ]
})
export class ProjectsModule {}
