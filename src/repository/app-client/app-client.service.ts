import { Inject, Injectable } from '@nestjs/common';
import { AppClient } from '../../entity/AppClient';
import { Model } from 'mongoose';
import { AppClientToken } from '../../schema/AppClientSchema';

@Injectable()
export class AppClientService {

  constructor(@Inject(AppClientToken) private readonly appClientModel: Model<AppClient>) {
  }

  async findAll(q = {}, fields = []): Promise<AppClient[]> {
    return await this.appClientModel.find(q, fields).exec();
  }

  async createOrUpdate(c: AppClient) {
    await this.appClientModel.updateOne({ token: c.token }, c, { upsert: true, setDefaultsOnInsert: true });
  }
}
