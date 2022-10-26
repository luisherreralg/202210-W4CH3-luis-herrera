import { Character } from './character';

export class Squire extends Character {
    brownNoseLevel: number;

    constructor(
        name: string,
        family: string,
        age: number,
        brownNoseLevel: number
    ) {
        super(name, family, age);
        this.brownNoseLevel = brownNoseLevel;
        this.message = 'Soy un loser';
    }
}
