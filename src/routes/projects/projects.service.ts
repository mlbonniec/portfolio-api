import { Injectable } from '@nestjs/common';
import { ProjectEntity } from '@objects/projects/project.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { GlobalRepository } from '@/repositories/global.repository';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity.name) private readonly projectsRepository: GlobalRepository<ProjectEntity>
  ) {}

  async getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectsRepository.findAll();
  }
}
