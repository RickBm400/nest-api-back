import { Module } from '@nestjs/common';
import { dogsController } from './dogs/controller/.controller';
import { DogsModule } from './dogs/dogs.module';
@Module({
  imports: [DogsModule],
  controllers: [dogsController],
})
export class AppModule { }
