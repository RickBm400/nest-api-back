import { Controller, Get, Query } from '@nestjs/common';
import { dogService } from '../service/service.service';
import { Dog } from '../class/Dog.class';

@Controller('dogs')
export class dogsController {
    constructor(public DogService: dogService) { }
    @Get()
    getDogs() {
        return this.DogService.getAll()
    }

    @Get('number')
    getFirstDog(@Query('elem') elem: number) {
        const juan = new Dog('Juanc', elem)
        this.DogService.addDog(juan)
        return juan
    }
}
