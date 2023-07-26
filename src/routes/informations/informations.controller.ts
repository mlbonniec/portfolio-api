import { InformationsViewModel } from '@objects/informations/informations.model';
import { Controller, Get } from '@nestjs/common';
import { InformationsService } from '@routes/informations/informations.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DocumentationTags } from '@config/swagger.config';

@ApiTags(DocumentationTags.INFORMATIONS)
@Controller()
export class InformationsController {
  constructor(private readonly informationsService: InformationsService) {}

  @ApiOperation({ summary: 'Informations about the API.' })
  @ApiOkResponse({ type: InformationsViewModel, description: 'Successfully retrieved informations.' })
  @Get()
  getInformations(): InformationsViewModel {
    return this.informationsService.getInformations();
  }
}
