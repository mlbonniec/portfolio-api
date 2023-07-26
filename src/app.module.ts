import { environmentConfig } from '@config/environment.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InformationsModule } from '@routes/informations/informations.module';
import { ProjectsModule } from '@routes/projects/projects.module';

@Module({
  imports: [
    ConfigModule.forRoot(environmentConfig),
    InformationsModule,
    ProjectsModule
  ]
})
export class AppModule {}
