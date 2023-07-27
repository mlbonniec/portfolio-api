import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '@objects/projects/project.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { GlobalRepository } from '@/repositories/global.repository';
import { CreateProjectDto } from '@objects/projects/project.dto';
import { Exceptions } from '@helpers/exceptions';
import { ObjectId } from '@mikro-orm/mongodb';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity.name) private readonly projectsRepository: GlobalRepository<ProjectEntity>
  ) {}

  /**
   * Get all the visible projects.
   * @remarks Project with visible = false are not returned.
   * @returns {Promise<ProjectEntity[]>} The projects found.
   */
  async getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectsRepository.find({
      visible: true
    });
  }

  /**
   * Get a project by its id.
   * @remarks Project with visible = false are not returned.
   * @param {string} id The id of the project to find.
   * @returns {Promise<ProjectEntity>} The project found.
   */
  async getById(id: string): Promise<ProjectEntity> {
    try {
      return await this.projectsRepository.findOneOrFail({
        _id: ObjectId.createFromHexString(id),
        visible: true
      });
    } catch (err: unknown) {
      Exceptions.NOT_FOUND.throw();
    }
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
