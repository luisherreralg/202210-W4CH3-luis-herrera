import { useState } from 'react';
import { characters } from '../../models/characters';
import { Card } from '../card.item/card';

export function List() {
    const data = [...characters];
    const [dataState, setdataState] = useState(data);
    const template = (
        <>
            <ul className="characters-list row list-unstyled">
                {dataState.map((itemArr) => (
                    <Card itemArr={itemArr}></Card>
                ))}
            </ul>
        </>
    );

    return template;
}
