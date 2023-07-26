import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from '@routes/projects/projects.service';

@Controller({ path: 'projects', version: '1' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects(): [] {
    return this.projectsService.getAllProjects();
  }
}
