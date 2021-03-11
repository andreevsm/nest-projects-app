import { Injectable } from '@nestjs/common';
import { Project } from './project.model';

import { Neo4jService } from 'nest-neo4j';
import { FusyFacade } from 'src/libs';

@Injectable()
export class ProjectService {
  constructor(
    private neo4jService: Neo4jService,
    private fusyFacade: FusyFacade,
  ) {}

  async getAll(): Promise<Project[]> {
    const { records } = await this.neo4jService.read(
      'MATCH (p:Project) RETURN p.id, p.name',
    );
    const projects = records.map(
      (record) => new Project(record.get('p.id').low, record.get('p.name')),
    );

    return projects;
  }

  async search(search: string): Promise<Project[]> {
    const { records } = await this.neo4jService.read(
      'MATCH (p:Project) RETURN p.id, p.name',
    );

    const projects = records.map(
      (record) => new Project(record.get('p.id').low, record.get('p.name')),
    );

    const findedProjects = this.fusyFacade.findItemsByString(projects, search, {
      keys: ['name'],
    });

    return findedProjects;
  }
}
