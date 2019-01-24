import { BaseEntity } from './BaseEntity';

export interface Lobby extends BaseEntity {
  appClientId: string;
  name: string;
  secret: string;
  creator: string;
  globalStats: any;
  playersStats: any;
}
