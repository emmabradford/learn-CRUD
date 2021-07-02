import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonDto } from './person.dto';

@Controller('people')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async getPeople() {
    return this.personService.getPeople();
  }

  @Post()
  async postPeople(@Body() person: PersonDto) {
    return this.personService.postPerson(person);
  }

  @Get()
  async getPersonById(@Param('id') id: number) {
    return this.personService.getPersonById(id);
  }

  @Delete()
  async deletePersonById() {}

  @Put()
  async putPersonById() {}
}
