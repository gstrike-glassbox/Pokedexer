import { Card } from "antd";
import { FC, ReactElement, useState } from "react";
import { IHoverPokemon } from "../../interfaces/IPokemonHover";
import '../pokedex.css';
import './card.css';

const CardHover: FC<IHoverPokemon> = (props: IHoverPokemon): ReactElement => {
    return (
        <div className="whenhovered">
            <div>
                <p>Pokdex Number: {props.id}</p>
                <p>Type: {props.types.length > 1 ? `${props.types[0]} | ${props.types[1]}` : props.types[0]}
                </p>
                
                <img src={props.maleFrontSprite} alt="pokemon-male" />
                <img src={props.maleBackSprite} alt="pokemon-male-back" />
                {props.femaleFrontSprite ? <img className="female-sprite" src={props.femaleFrontSprite} alt="pokemon-female" /> : null}
                {props.femaleBackSprite ? <img className="female-sprite" src={props.femaleBackSprite} alt="pokemon-female-back" /> : null}
            </div>
        </div>
    );
};
export default CardHover;
