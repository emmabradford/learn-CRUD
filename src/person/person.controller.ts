import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
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

  @Get(':id')
  async getPersonById(@Param('id') id: number) {
    return this.personService.getPersonById(id);
  }

  @Delete(':id')
  async deletePersonById(@Param(':id') id: number) {
    this.personService.deletePersonById(id);
  }

  @Put(':id')
  async putPersonById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.personService.putPersonByID(id, propertyName, propertyValue);
  }
}
