import type { Environment } from '@/types/environments';

export class InformationsViewModel {
  version: string;
  name: string;
  description: string;
  environment: Environment;
  port?: number;
}
