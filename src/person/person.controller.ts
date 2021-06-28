import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('people')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  async getPeople() {
    return this.personService.getPeople();
  }
}
