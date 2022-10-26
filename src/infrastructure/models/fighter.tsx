import { Character } from './character';

export class Fighter extends Character {
    weapon: string;
    dexterity: number;

    constructor(
        name: string,
        family: string,
        age: number,
        weapon: string,
        dexterity: number
    ) {
        super(name, family, age);
        this.weapon = weapon;
        this.dexterity = dexterity;
        this.message = 'Primero pego y luego pregunto';
    }
}
