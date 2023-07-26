import { Environment } from '@/types/environments';
import { ApiProperty } from '@nestjs/swagger';

export class InformationsViewModel {
  @ApiProperty({ example: '1.0.0' })
  version: string;

  @ApiProperty({ example: 'Portfolio API.' })
  name: string;

  @ApiProperty({ example: 'Portfolio API made in NestJS.' })
  description: string;

  @ApiProperty({ enum: Environment, example: Environment.DEVELOPMENT })
  environment: Environment;

  @ApiProperty({ required: false, example: 8080 })
  port?: number;
}
