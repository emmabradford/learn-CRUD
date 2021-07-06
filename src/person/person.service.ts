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

  public async getPeople() {
    const people = await this.personModel.find().exec();
    if (!people || !people[0]) {
      throw new HttpException('not found', 404);
    }
    return people;
  }

  public async postPerson(newPerson) {
    const person = await this.personModel(newPerson);
    return person.save();
  }

  public async getPersonById(id: number): Promise<any> {
    const people = await this.personModel.findOne({ id }).exec();
    if (!people) {
      throw new HttpException('not found', 404);
    }
    return people;
  }

  public async deletePersonById(id: number): Promise<any> {
    const person = await this.personModel.deleteOne({ id }).exec();
    if (person.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return person;
  }

  public async putPersonByID(
    id: number,
    propertyName: string,
    propertValue: string,
  ): Promise<any> {
    const person = await this.personModel.findOne({ id }).exec();
    if (!person) {
      throw new HttpException('Not Found', 404);
    }
    return person;
  }
}
