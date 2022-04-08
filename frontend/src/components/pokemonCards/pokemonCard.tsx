import { Card } from "antd";
import { FC, ReactElement, useState } from "react";
import '../pokedex.css';
import CardHover from "./cardHover";
import './card.css'
import { DisplayPokemon } from "../../interfaces/DisplayPokemon";

const PokemonCard: FC<DisplayPokemon> = ({ ...props }): ReactElement => {
    const [hoverOver, setHoverOver] = useState<boolean>(false);

    const triggerHover = () => {
        setHoverOver(prev => !prev);
    }
    return (
        <div>
            <Card className="card"
                title={`${(props.name as string)[0].toUpperCase() + (props.name as string).slice(1)}`}
                bordered={true}
                onMouseEnter={triggerHover}
                onMouseLeave={triggerHover}
            >
                {props.allowHover && hoverOver ? <CardHover id={props.id} name={(props.name as string)} typeName={props.typeName} maleFrontSprite={props.maleFrontSprite} maleBackSprite={(props.maleBackSprite as string)} femaleFrontSprite={props.femaleFrontSprite}
                    femaleBackSprite={props.femaleBackSprite} /> : null}
                <img src={props.maleFrontSprite} alt="pokemon-male" />
                <img src={props.maleFrontSpriteShiny} alt="pokemon-male-shiny" />
                {props.femaleFrontSprite ? <img className="female-sprite" src={props.femaleFrontSprite} alt="pokemon-female" /> : null}
                {props.femaleFrontSpriteShiny ? <img className="female-sprite" src={props.femaleFrontSpriteShiny} alt="pokemon-female-shiny" /> : null}
                {props.showFullCard && props.maleBackSprite ? <img className="male-sprite-back" src={props.maleBackSprite} alt="pokemon-male-back" /> : null}
                {props.showFullCard && props.femaleBackSprite ? <img className="female-sprite-back" src={props.femaleBackSprite} alt="pokemon-female-back" /> : null}

            </Card>
        </div>
    );
};
export default PokemonCard;
