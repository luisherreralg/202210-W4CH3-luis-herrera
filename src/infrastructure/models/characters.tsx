import { Counselor } from './counserlo';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export const characters = [
    new King('Joffrey', 'Baratheon', 40, 1),
    new Fighter('Jaime', 'Lanister', 20, 'Destornillador', 5),
    new Fighter('Daenerys', 'Targaryen', 16, 'Mechero', 10),
    new Counselor('Tyrion', 'Lannister', 35),
    new Squire('Bronn', '', 25, 50),
];
