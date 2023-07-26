import type { InformationsViewModel } from '@objects/informations/informations.model';
import { Injectable } from '@nestjs/common';
import { InformationsMapper } from '@objects/informations/informations.mapper';
import { name, version, description } from 'package.json';
import { EnvironmentHelper } from '@helpers/environment';

@Injectable()
export class InformationsService {
  getInformations(): InformationsViewModel {
    return InformationsMapper.toViewModel(
      version,
      name,
      description,
      EnvironmentHelper.getEnvironment(),
      EnvironmentHelper.getPort()
    );
  }
}
