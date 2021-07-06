import { throwStatement } from '@babel/types';
import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPerson } from './interfaces/person.interface';
import { PersonDto } from './person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel('Person') private readonly personModel: Model<IPerson>,
  ) {}

  public async getPeople() {}

  public async postPerson(person) {}

  public async getPersonById(id: number): Promise<any> {}

  public async deletePersonById(id: number): Promise<any> {}

  public async putPersonByID(
    id: number,
    propertyName: string,
    propertValue: string,
  ): Promise<any> {}
}
