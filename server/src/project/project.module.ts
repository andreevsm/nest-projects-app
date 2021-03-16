import { Module } from '@nestjs/common';
import { FusyFacade } from 'src/libs';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, FusyFacade],
})
export class ProjectModule {}
