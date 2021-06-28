import { throwStatement } from '@babel/types';
import { HttpException, Injectable } from '@nestjs/common';
import { PEOPLE } from './person.mok';

@Injectable()
export class PersonService {
  private people = PEOPLE;

  public async getPeople() {
    return this.people;
  }

  public async postPerson(person) {
    return this.people.push(person);
  }

  public async getPersonById(id: number) {
    const person = this.people.find((person) => person.id === id);
    if (person) {
      throw new HttpException('Not Found', 404);
    }
    return person;
  }

  public async deletePersonById(id: number) {
    const i = this.people.findIndex((person) => person.id === id);
    if (i === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.people.splice(i, 1);
    return this.people;
  }

  public async putPersonByID(
    id: number,
    propertyName: string,
    propertValue: string,
  ) {
    const i = this.people.findIndex((person) => person.id === id);
    if (i === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.people[i][propertyName] = propertValue;

    return this.people;
  }
}
