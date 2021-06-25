import { throwStatement } from '@babel/types';
import { Injectable } from '@nestjs/common';
import { PEOPLE } from './cars.mok';

@Injectable()
export class PersonService {
  private people = PEOPLE;
  public async getPeople() {
    return this.people;
  }
}
