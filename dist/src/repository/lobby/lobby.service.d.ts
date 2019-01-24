import { Lobby } from '../../entity/Lobby';
import { Model } from 'mongoose';
export declare class LobbyService {
    private readonly lobbyModel;
    constructor(lobbyModel: Model<Lobby>);
    findAll(q?: {}, fields?: any[]): Promise<Lobby[]>;
    create(lobby: Lobby): Promise<any>;
    update(lobby: Lobby): Promise<void>;
}
