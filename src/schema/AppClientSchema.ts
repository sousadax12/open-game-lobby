import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { DbConnectionToken } from '../database/database.providers';

export const AppClientSchema = new mongoose.Schema({
  token: String,
  name: String,
}, { timestamps: true });

export const AppClientToken = 'AppClientToken';

export const AppClientProviders = [
  {
    provide: AppClientToken,
    useFactory: (connection: Connection) => connection.model('AppClient', AppClientSchema),
    inject: [DbConnectionToken],
  },
];
