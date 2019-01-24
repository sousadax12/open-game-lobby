import * as mongoose from 'mongoose';
import { Connection, Schema } from 'mongoose';
import { DbConnectionToken } from '../database/database.providers';

export const LobbySchema = new mongoose.Schema({
  appClientId: { type: Schema.Types.ObjectId, required: true },
  name: String,
  secret: String,
  creator: String,
  globalStats: { type: Schema.Types.Mixed, required: true },
  playersStats: { type:  Schema.Types.Mixed, required: true },

}, { timestamps: true });
LobbySchema.index({ name: 'text' });

export const LobbyToken = 'LobbyToken';

export const LobbyProviders = [
  {
    provide: LobbyToken,
    useFactory: (connection: Connection) => connection.model('Lobby', LobbySchema),
    inject: [DbConnectionToken],
  },
];
