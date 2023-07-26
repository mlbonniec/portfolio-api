import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from '@routes/projects/projects.service';
import { ProjectEntity } from '@objects/projects/project.entity';

@Controller({ path: 'projects', version: '1' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectsService.getAllProjects();
  }
}
