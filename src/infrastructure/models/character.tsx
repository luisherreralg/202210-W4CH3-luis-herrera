export class Character {
    name: string;
    family: string;
    age: number;
    lifeStatus: boolean;
    message: string;
    static serie = 'Game of Thrones';
    //   ally: King | null;
    //   advised: King | Fighter | null;

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.lifeStatus = true;
        this.message = '';
    }

    comunique() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}
