import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environmentConfig } from '@config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot(environmentConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
