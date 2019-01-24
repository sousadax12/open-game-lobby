import { Inject, Injectable } from '@nestjs/common';
import { Lobby } from '../../entity/Lobby';
import { LobbyToken } from '../../schema/LobbySchema';
import { Model } from 'mongoose';

@Injectable()
export class LobbyService {

  constructor(@Inject(LobbyToken) private readonly lobbyModel: Model<Lobby>) {
  }

  async findAll(q = {}, fields = []): Promise<Lobby[]> {
    return await this.lobbyModel.find(q, fields).exec();
  }

  async create(lobby: Lobby) {
    return await this.lobbyModel.create(lobby);
  }

  async update(lobby: Lobby) {
    await this.lobbyModel.updateOne({ _id: lobby._id }, lobby);
  }
}
