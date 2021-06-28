import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async getPeople() {
    return this.personService.getPeople();
  }

  @Post()
  async postPeople(@Body car:){

  }

  @Get()
  async getPersonById(){

  }

  @Delete()
  async deletePersonById(){

  }

  @Put
  async putPersonById(){}
}
