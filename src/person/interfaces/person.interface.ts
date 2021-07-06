import { Document } from 'mongoose';

export interface IPerson extends Document {
  readonly id: number;
  readonly name: string;
  readonly title: string;
  readonly partner: string;
  readonly home: string;
  readonly weapon: string;
}
