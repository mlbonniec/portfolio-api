import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProjectsService } from '@routes/projects/projects.service';
import { ProjectEntity, ShortProjectEntity } from '@objects/projects/project.entity';
import { ApiBasicAuth, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentationTags } from '@config/swagger.config';
import { CreateProjectDto, GetProjectByIdDto } from '@objects/projects/project.dto';
import { AuthorizationGuard } from '@guards/authorization.guard';

@ApiTags(DocumentationTags.PROJECTS)
@Controller({ path: 'projects', version: '2' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Get all the projects.' })
  @ApiOkResponse({ type: ShortProjectEntity, isArray: true, description: 'Projects found.' })
  @Get()
  async getAllProjects(): Promise<ShortProjectEntity[]> {
    return this.projectsService.getAllProjects();
  }

  @ApiOperation({ summary: 'Get a project by its id.' })
  @ApiOkResponse({ type: ProjectEntity, description: 'Project found.' })
  @ApiNotFoundResponse({ description: 'Project not found.' })
  @Get(':id')
  async getById(@Param() params: GetProjectByIdDto): Promise<ProjectEntity> {
    return this.projectsService.getById(params.id);
  }

  @ApiOperation({ summary: 'Create a project.' })
  @ApiOkResponse({ type: ProjectEntity, description: 'Project created.' })
  @ApiBasicAuth()
  @UseGuards(AuthorizationGuard)
  @Post()
  async create(@Body() body: CreateProjectDto): Promise<ProjectEntity> {
    return this.projectsService.create(body);
  }
}
