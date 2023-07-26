import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from '@routes/projects/projects.service';
import { ProjectEntity } from '@objects/projects/project.entity';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentationTags } from '@config/swagger.config';

@ApiTags(DocumentationTags.PROJECTS)
@Controller({ path: 'projects', version: '1' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Get all the projects.' })
  @ApiOkResponse({ type: ProjectEntity, isArray: true, description: 'Projects found.' })
  @Get()
  getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectsService.getAllProjects();
  }
}
