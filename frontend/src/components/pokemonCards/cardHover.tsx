import { Tag } from "antd";
import { FC, ReactElement } from "react";
import { TYPE_COLOUR } from "../../enums/typeColour";
import { getValueUsingStringKey } from "../../helpers/enumHelper";
import { IHoverPokemon } from "../../interfaces/IPokemonHover";
import '../pokedex.css';
import './card.css';

const CardHover: FC<IHoverPokemon> = (props: IHoverPokemon): ReactElement => {
    return (
        <div className="whenhovered">
            <div>
                <p>Pokedex Number: {props.id}</p>
                <p>{props.types.length > 1 ? <><Tag color={getValueUsingStringKey(TYPE_COLOUR, props.types[0])}>{props.types[0]}</Tag><Tag color={getValueUsingStringKey(TYPE_COLOUR, props.types[1])}>{props.types[1]}</Tag></> 
                : <Tag color={getValueUsingStringKey(TYPE_COLOUR, props.types[0])}>{props.types[0]}</Tag>}
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
