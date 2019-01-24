import { Controller, Get } from '@nestjs/common';
import { AppClient } from '../../entity/AppClient';
import { AppClientService } from '../../repository/app-client/app-client.service';

@Controller('lobby')
export class LobbyController {

  constructor(private readonly appClientService: AppClientService) {
  }



}
