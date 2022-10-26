import { Character } from '../../models/character';
import { Fighter } from '../../models/fighter';
import { King } from '../../models/king';
import { Squire } from '../../models/squire';

export function Card({ itemArr }: { itemArr: Character }) {
    const template = (
        <>
            <li className="character col">
                <div className="card character__card">
                    <img
                        src={'./assets/' + itemArr.name.toLowerCase() + '.jpg'}
                        alt="Nombre y familia del personaje"
                        className="character__picture card-img-top"
                    />
                    <div className="card-body">
                        <h2 className="character__name card-title h4">
                            {itemArr.name} - {itemArr.family}
                        </h2>
                        <div className="character__info">
                            <ul className="list-unstyled">
                                <li>Edad: {itemArr.age}</li>
                                <li>
                                    Estado:{' '}
                                    {itemArr.lifeStatus ? 'Vivo' : 'Muerto'}
                                    <i className="fas fa-thumbs-down"></i>
                                    <i className="fas fa-thumbs-up"></i>
                                </li>
                            </ul>
                        </div>
                        <div className="character__overlay">
                            <ul className="list-unstyled">
                                <li>
                                    Años de reinado:{' '}
                                    {(itemArr as King).kingdomYears ===
                                    undefined
                                        ? 'X'
                                        : (itemArr as King).kingdomYears}
                                </li>
                                <li>
                                    Arma:{' '}
                                    {(itemArr as Fighter).weapon === undefined
                                        ? 'X'
                                        : (itemArr as Fighter).weapon}
                                </li>
                                <li>
                                    Destreza:{' '}
                                    {(itemArr as Fighter).dexterity ===
                                    undefined
                                        ? 'X'
                                        : (itemArr as Fighter).dexterity}
                                </li>
                                <li>
                                    Peloteo:{' '}
                                    {(itemArr as Squire).brownNoseLevel ===
                                    undefined
                                        ? 'X'
                                        : (itemArr as Squire).brownNoseLevel}
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
        </>
    );

    return template;
}
