import { Body, Controller, Get } from '@nestjs/common';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return await this.projectService.getAll();
  }

  @Get('search')
  async search(@Body('search') search = ''): Promise<Project[]> {
    return await this.projectService.search(search);
  }
}
