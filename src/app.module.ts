import { Module } from '@nestjs/common';
import { Neo4jModule } from 'nest-neo4j';
import { ProjectModule } from './project';

@Module({
  imports: [
    ProjectModule,
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: 'localhost',
      username: 'sergey',
      password: '1234',
      port: '7687',
    }),
  ],
})
export class AppModule {}
