import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { LocationModule } from './location/location.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/person_manager'),
    PersonModule,
    LocationModule,
  ],
})
export class AppModule {}
