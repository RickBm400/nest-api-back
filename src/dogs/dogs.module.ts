import { Module } from '@nestjs/common';
import { dogsController } from './controller/dogs.controller';
import { dogService } from './service/service.service';

@Module({
  controllers: [dogsController],
  providers: [dogService]
})
export class DogsModule { }
