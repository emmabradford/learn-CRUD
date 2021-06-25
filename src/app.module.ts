import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [PersonModule, LocationModule],
})
export class AppModule {}
