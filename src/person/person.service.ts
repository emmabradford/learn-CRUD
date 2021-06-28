import { throwStatement } from '@babel/types';
import { Injectable } from '@nestjs/common';
import { PEOPLE } from './person.mok';

@Injectable()
export class PersonService {
  private people = PEOPLE;

  public async getPeople() {
    return this.people;
  }

  public async postPerson(person) {
    return;
  }

  public async getPersonById(id) {
    return;
  }

  public async deletePersonById(id) {
    return;
  }

  public async putPersonByID(id) {
    return;
  }
}
