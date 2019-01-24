import { BaseEntity } from './BaseEntity';
export interface AppClient extends BaseEntity {
    token: string;
    name: string;
}
