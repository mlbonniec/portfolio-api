import { environmentConfig } from '@config/environment.config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InformationsModule } from '@routes/informations/informations.module';
import { ProjectsModule } from '@routes/projects/projects.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { mikroOrmConfig } from '@config/mikro-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot(environmentConfig),
    MikroOrmModule.forRoot(mikroOrmConfig),
    InformationsModule,
    ProjectsModule
  ]
})
export class AppModule {}
