import { Injectable } from '@nestjs/common';

@Injectable()
export class dogService {
    public dogs: { name: string, number: number }[] = []

    addDog(dog: { name: string, number: number }) {
        this.dogs.push(dog)
    }

    getAll(): { name: string, number: number }[] {
        return this.dogs
    }

}
