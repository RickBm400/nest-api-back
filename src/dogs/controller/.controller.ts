import { Controller, Get } from '@nestjs/common';
import { dog } from '../class/class';

@Controller('dogs')
export class dogsController {
    @Get()
    getDogs() {
        return ' woof'
    }

    @Get('1')
    getFirstDog() {
        let juan = new dog('Juanc')
        return juan
    }
}
