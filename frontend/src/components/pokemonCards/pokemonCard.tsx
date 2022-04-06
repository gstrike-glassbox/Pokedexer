import { Card } from "antd";
import { FC, ReactElement, useState } from "react";
import '../pokedex.css';
import CardHover from "./cardHover";
import './card.css'
import { IPokemon } from "../../interfaces/IPokemon";

const PokemonCard: FC<IPokemon> = (props: IPokemon): ReactElement => {
    const [hoverOver, setHoverOver] = useState<boolean>(false);
    
    const initHover = () => {
        setHoverOver(prev => !prev);
    }
    return (
        <div>
        <Card className="card" 
            title={`${(props.name as string)[0].toUpperCase() + (props.name as string).slice(1)}`} 
            bordered={true}
            onMouseEnter={initHover}
            onMouseLeave={initHover}
            >
            {hoverOver ? <CardHover id={props.id} name={(props.name as string)} types={props.types} maleFrontSprite={props.maleFrontSprite} maleBackSprite={props.maleBackSprite} femaleFrontSprite={props.femaleFrontSprite} 
            femaleBackSprite={props.femaleBackSprite} /> : null}
            <img src={props.maleFrontSprite} alt="pokemon-male" />
            <img src={props.maleFrontSpriteShiny} alt="pokemon-male-shiny" />
            {props.femaleFrontSprite ? <img className="female-sprite" src={props.femaleFrontSprite} alt="pokemon-female" /> : null}
            {props.femaleFrontSpriteShiny ? <img className="female-sprite" src={props.femaleFrontSpriteShiny} alt="pokemon-female-shiny" /> : null}
        </Card>
    </div>
    );
};
export default PokemonCard;
