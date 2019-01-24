import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { AppClientService } from '../../repository/app-client/app-client.service';
import { AppClient } from '../../entity/AppClient';
import { Lobby } from '../../entity/Lobby';
import { LobbyService } from '../../repository/lobby/lobby.service';

@Controller('app-client')
export class AppClientController {

  constructor(
    private readonly appClientService: AppClientService,
    private readonly lobbyService: LobbyService,
  ) {
  }

  @Get()
  async getAll(): Promise<AppClient[]> {
    return await this.appClientService.findAll();
  }

  @Get(':id/lobby')
  async getAllLobby(@Param('id') id, @Query('q') q): Promise<Lobby[]> {
    const [appClient] = await this.appClientService.findAll({ _id: id });

    if (!appClient) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    if (q) {
      q = { $text: { $search: q || /.*/ } };
    } else {
      q = {};
    }

    return await this.lobbyService.findAll({ ...{ appClientId: id }, ...q }, ['name', 'createdAt']);
  }

  @Post(':id/lobby')
  async createLobby(@Param('id') id, @Body() lobby: Lobby): Promise<Lobby> {

    const [appClient] = await this.appClientService.findAll({ _id: id });
    if (!appClient || !lobby) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const [lobbyOld] = await this.lobbyService.findAll({ appClientId: id, name: lobby.name });

    if (lobbyOld) {
      throw new HttpException('Lobby already exist', HttpStatus.CONFLICT);
    }

    lobby.appClientId = id;
    lobby = await this.lobbyService.create(lobby);

    [lobby] = await this.lobbyService.findAll({ _id: lobby._id }, [
      'appClientId',
      'name',
      'creator',
      'globalStats',
      'playersStats',
      'updatedAt',
      'createdAt',
    ]);

    return lobby;
  }

  @Post(':id/lobby/:idLobby/players-stats')
  async update(@Param('id') id, @Param('idLobby') idLobby, @Body() playersStat): Promise<Lobby> {

    const [appClient] = await this.appClientService.findAll({ _id: id });
    if (!appClient || !playersStat) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    const [lobby] = await this.lobbyService.findAll({ appClientId: id, _id: idLobby });

    if (!lobby) {
      throw new HttpException('lobby not found', HttpStatus.NOT_FOUND);
    }
    lobby.playersStats = { ...lobby.playersStats, ...playersStat };

    await this.lobbyService.update(lobby);

    return lobby;
  }

}
