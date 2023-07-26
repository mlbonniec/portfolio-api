import { Module } from '@nestjs/common';
import { InformationsController } from '@routes/informations/informations.controller';
import { InformationsService } from '@routes/informations/informations.service';

@Module({
  controllers: [
    InformationsController
  ],
  providers: [
    InformationsService
  ]
})
export class InformationsModule {}
