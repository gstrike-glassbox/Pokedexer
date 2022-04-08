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
                {props.allowHover && hoverOver ? <CardHover id={props.id} name={(props.name as string)} typeName={props.typeName} maleFrontSprite={props.sprites.frontDefault} maleBackSprite={props.sprites.backDefault} femaleFrontSprite={props.sprites.frontFemale}
                    femaleBackSprite={props.sprites.backFemale} /> : null}
                {
                    Object.entries(props.sprites).map(([key, sprite]) => {
                        if (sprite) {
                            if (props.showFullCard) {
                                return <><img src={sprite} alt={`pokemon-${sprite}`} /></>
                            }
                            else if (!sprite.toLowerCase().includes("back")) {
                                return <img src={sprite} alt={`pokemon-${sprite}`} />
                            }
                        }
                        return null;
                    })
                }
            </Card>
        </div>
    );
};
export default PokemonCard;
