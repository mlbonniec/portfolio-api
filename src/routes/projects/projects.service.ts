import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '@objects/projects/project.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { GlobalRepository } from '@/repositories/global.repository';
import { CreateProjectDto } from '@objects/projects/project.dto';
import { Exceptions } from '@helpers/exceptions';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity.name) private readonly projectsRepository: GlobalRepository<ProjectEntity>
  ) {}

  /**
   * Get all the projects.
   * @returns {Promise<ProjectEntity[]>} The projects found.
   */
  async getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectsRepository.findAll();
  }

  /**
   * Create a project.
   * @param {CreateProjectDto} projectDto The project to create.
   * @throws {Exception} If the project cannot be created.
   * @returns {Promise<ProjectEntity>} The project created.
   */
  async create(projectDto: CreateProjectDto): Promise<ProjectEntity> {
    const project: ProjectEntity = this.projectsRepository.create<ProjectEntity>(projectDto);

    try {
      await this.projectsRepository.insert(project);
    } catch (error) {
      Exceptions.INTERNAL_SERVER_ERROR.throw();
    }

    return project;
  }
}
