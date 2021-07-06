import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
