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
  public async getPeople() {
    return this.personService.getPeople();
  }

  @Post()
  public async postPeople(@Body() person: PersonDto) {
    return this.personService.postPerson(person);
  }

  @Get(':id')
  public async getPersonById(@Param('id') id: number) {
    return this.personService.getPersonById(id);
  }

  @Delete(':id')
  public async deletePersonById(@Param(':id') id: number) {
    this.personService.deletePersonById(id);
  }

  @Put(':id')
  public async putPersonById(@Param('id') id: number, @Query() query) {
    const propertyName = query.property_name;
    const propertyValue = query.property_value;
    return this.personService.putPersonByID(id, propertyName, propertyValue);
  }
}
