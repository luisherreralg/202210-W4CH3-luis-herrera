import { useState } from 'react';
import { characters } from '../../models/characters';
import { Fighter } from '../../models/fighter';
import { King } from '../../models/king';
import { Squire } from '../../models/squire';

export function Card() {
    const data = [...characters];
    const [dataState, setdataState] = useState(data);
    console.log(dataState);
    const template = (
        <>
            <ul className="characters-list row list-unstyled">
                {dataState.map((item) => (
                    <li className="character col">
                        <div className="card character__card" key={item.name}>
                            <img
                                src={
                                    './assets/' +
                                    item.name.toLowerCase() +
                                    '.jpg'
                                }
                                alt="Nombre y familia del personaje"
                                className="character__picture card-img-top"
                            />
                            <div className="card-body">
                                <h2 className="character__name card-title h4">
                                    {item.name} - {item.family}
                                </h2>
                                <div className="character__info">
                                    <ul className="list-unstyled">
                                        <li>Edad: {item.age}</li>
                                        <li>
                                            Estado:{' '}
                                            {item.lifeStatus
                                                ? 'Vivo'
                                                : 'Muerto'}
                                            <i className="fas fa-thumbs-down"></i>
                                            <i className="fas fa-thumbs-up"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="character__overlay">
                                    <ul className="list-unstyled">
                                        <li>
                                            Años de reinado:{' '}
                                            {(item as King).kingdomYears ===
                                            undefined
                                                ? 'X'
                                                : (item as King).kingdomYears}
                                        </li>
                                        <li>
                                            Arma:{' '}
                                            {(item as Fighter).weapon ===
                                            undefined
                                                ? 'X'
                                                : (item as Fighter).weapon}
                                        </li>
                                        <li>
                                            Destreza:{' '}
                                            {(item as Fighter).dexterity ===
                                            undefined
                                                ? 'X'
                                                : (item as Fighter).dexterity}
                                        </li>
                                        <li>
                                            Peloteo:{' '}
                                            {(item as Squire).brownNoseLevel ===
                                            undefined
                                                ? 'X'
                                                : (item as Squire)
                                                      .brownNoseLevel}
                                        </li>
                                        <li>Asesora a: X</li>
                                        <li>Sirve a: X</li>
                                    </ul>
                                    <div className="character__actions">
                                        <button className="character__action btn">
                                            habla
                                        </button>
                                        <button className="character__action btn">
                                            muere
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <i className="emoji"></i>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );

    return template;
}
