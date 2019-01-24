import * as mongoose from 'mongoose';

export const DbConnectionToken = 'DbConnectionToken';

export const databaseProviders = [
  {
    provide: DbConnectionToken,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost/open-game-lobby'),
  },
];