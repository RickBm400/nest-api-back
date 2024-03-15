import { Module } from '@nestjs/common';
import { dogsController } from './dogs/controller/dogs.controller';
import { DogsModule } from './dogs/dogs.module';
import { AppController } from './app.controller';
import { dogService } from './dogs/service/service.service';
@Module({
  imports: [DogsModule],
  controllers: [dogsController, AppController],
  providers: [dogService]
})
export class AppModule { }
