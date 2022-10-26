export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static serie = 'Game of Thrones';

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
    }
}
