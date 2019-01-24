import { AppClientService } from '../../repository/app-client/app-client.service';
import { AppClient } from '../../entity/AppClient';
import { Lobby } from '../../entity/Lobby';
import { LobbyService } from '../../repository/lobby/lobby.service';
export declare class AppClientController {
    private readonly appClientService;
    private readonly lobbyService;
    constructor(appClientService: AppClientService, lobbyService: LobbyService);
    getAll(): Promise<AppClient[]>;
    getAllLobby(id: any, q: any): Promise<Lobby[]>;
    createLobby(id: any, lobby: Lobby): Promise<Lobby>;
    update(id: any, idLobby: any, playersStat: any): Promise<Lobby>;
}
