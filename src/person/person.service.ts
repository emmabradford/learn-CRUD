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

  public async getPersonById(id: number): Promise<any> {
    const personId = Number[id];
    return new Promise((resolve) => {
      const person = this.people.find((person) => person.id === id);
      if (person) {
        throw new HttpException('Not Found', 404);
      }
      return resolve(person);
    });
  }

  public async deletePersonById(id: number): Promise<any> {
    const personId = Number(id);
    return new Promise((resolve) => {
      const i = this.people.findIndex((person) => person.id === personId);
      if (i === -1) {
        throw new HttpException('Not Found', 404);
      }
      this.people.splice(i, 1);
      return resolve(this.people);
    });
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
