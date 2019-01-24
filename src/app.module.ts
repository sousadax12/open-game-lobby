import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppClientService } from './repository/app-client/app-client.service';
import { LobbyService } from './repository/lobby/lobby.service';
import { LobbyController } from './controller/lobby/lobby.controller';
import { AppClientController } from './controller/app-client/app-client.controller';
import { DatabaseModule } from './database/database.module';
import { AppClientProviders } from './schema/AppClientSchema';
import { AppClient } from './entity/AppClient';
import { LobbyProviders } from './schema/LobbySchema';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    DatabaseModule,
    EventsModule,
  ],
  controllers: [AppController, LobbyController, AppClientController],
  providers: [
    AppService,
    AppClientService,
    LobbyService,
    ...AppClientProviders,
    ...LobbyProviders,
  ],
  exports: [
    AppClientService,
    DatabaseModule,
  ],
})
export class AppModule {
  constructor(private readonly appClientService: AppClientService) {
    (async () => {
      const appClient = {
        token: 'exmaple_token',
        name: 'mgt_test',
      } as AppClient;
      await appClientService.createOrUpdate(appClient);
    })();

  }
}
