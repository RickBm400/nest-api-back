import { Module } from '@nestjs/common';
import { dogsController } from './controller/.controller';

@Module({
  controllers: [dogsController]
})
export class DogsModule { }
