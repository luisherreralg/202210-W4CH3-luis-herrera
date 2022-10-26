import { characters } from '../../models/characters';
import { Card } from '../card.item/card';

export function List() {
    const data = [...characters];
    // Al no usar el setdataState lo comento para evitar errores de compilación por no usar variables
    // const [dataState, setdataState] = useState(data);
    const template = (
        <>
            <ul className="characters-list row list-unstyled">
                {data.map((itemArr, index: number) => (
                    <Card key={index.toString()} itemArr={itemArr}></Card>
                ))}
            </ul>
        </>
    );

    return template;
}
