import { Environment } from '@/types/environments';
import type { InformationsViewModel } from '@objects/informations/informations.model';

export abstract class InformationsMapper {
  static toViewModel(
    version: string,
    name: string,
    description: string,
    environment: Environment,
    port: number | undefined
  ): InformationsViewModel {
    return {
      version,
      name,
      description,
      environment,
      port: environment !== Environment.PRODUCTION ? port : undefined
    }
  }
}
