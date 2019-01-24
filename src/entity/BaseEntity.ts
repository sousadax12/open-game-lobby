import { Document } from 'mongoose';

export interface BaseEntity extends Document {
  _id: string;
  updatedAt: Date;
  createdAt: Date;

}