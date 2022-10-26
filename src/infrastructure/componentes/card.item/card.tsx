import { SyntheticEvent, useState } from 'react';
import { Character } from '../../models/character';
import { Fighter } from '../../models/fighter';
import { King } from '../../models/king';
import { Squire } from '../../models/squire';

export function Card({ itemArr }: { itemArr: Character }) {
    const [itemArrStatus, setItemArrStatus] = useState(itemArr);

    const handlerClick = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLObjectElement;
        setItemArrStatus({
            ...itemArrStatus,
            [element.name]: 'Muerto',
        });
    };

    const template = (
        <>
            <li className="character col">
                <div className="card character__card">
                    <img
                        src={
                            './assets/' +
                            itemArrStatus.name.toLowerCase() +
                            '.jpg'
                        }
                        alt="Nombre y familia del personaje"
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {itemArrStatus.name} - {itemArrStatus.family}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Edad: {itemArrStatus.age}</li>
                                <li>
                                    Estado: {itemArrStatus.lifeStatus}
                                    <i className="fas fa-thumbs-down"></i>
                                    <i className="fas fa-thumbs-up"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                <li>
                                    Años de reinado:{' '}
                                    {(itemArrStatus as King).kingdomYears ===
                                    undefined
                                        ? 'X'
                                        : (itemArrStatus as King).kingdomYears}
                                </li>
                                <li>
                                    Arma:{' '}
                                    {(itemArrStatus as Fighter).weapon ===
                                    undefined
                                        ? 'X'
                                        : (itemArrStatus as Fighter).weapon}
                                </li>
                                <li>
                                    Destreza:{' '}
                                    {(itemArrStatus as Fighter).dexterity ===
                                    undefined
                                        ? 'X'
                                        : (itemArrStatus as Fighter).dexterity}
                                </li>
                                <li>
                                    Peloteo:{' '}
                                    {(itemArrStatus as Squire)
                                        .brownNoseLevel === undefined
                                        ? 'X'
                                        : (itemArrStatus as Squire)
                                              .brownNoseLevel}
                                </li>
                                <li>Asesora a: X</li>
                                <li>Sirve a: X</li>
                            </ul>
                            <div className="character__actions">
                                <button className="character__action btn">
                                    habla
                                </button>
                                <button
                                    className="character__action btn"
                                    name="lifeStatus"
                                    onClick={handlerClick}
                                >
                                    muere
                                </button>
                            </div>
                        </div>
                    </div>
                    <i className="emoji"></i>
                </div>
            </li>
        </>
    );

    return template;
}
