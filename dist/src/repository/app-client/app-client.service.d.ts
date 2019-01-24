import { AppClient } from '../../entity/AppClient';
import { Model } from 'mongoose';
export declare class AppClientService {
    private readonly appClientModel;
    constructor(appClientModel: Model<AppClient>);
    findAll(q?: {}, fields?: any[]): Promise<AppClient[]>;
    createOrUpdate(c: AppClient): Promise<void>;
}
