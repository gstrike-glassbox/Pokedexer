
import { Col, Row } from "antd";
import { FC, useContext } from "react";
import { useParams } from "react-router";
import { PokemonContext } from "../App";
import PokemonCard from "./pokemonCards/pokemonCard";

const Pokemon: FC = () => {
    const pokemons = useContext(PokemonContext)

    const { name: pokemonName } = useParams<{ name: string }>();
    const pokemon = pokemons.find(e => e.name === pokemonName);

    if (!pokemon) return <div>NotFound</div>
    return (
        <div  style={{ textAlign: 'center', zIndex: 1, width: '100%' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <PokemonCard id={pokemon.id} name={(pokemon.name as string)} types={pokemon.types} maleFrontSprite={pokemon.maleFrontSprite} maleFrontSpriteShiny={pokemon.maleFrontSpriteShiny} femaleFrontSprite={pokemon.femaleFrontSprite}
                        femaleFrontSpriteShiny={pokemon.femaleFrontSpriteShiny} maleBackSprite={pokemon.maleBackSprite} femaleBackSprite={pokemon.femaleBackSprite} allowHover={false} />

                </Col>
                <Col span={8}>

                </Col>
                <Col span={8}>

                </Col>
            </Row>

        </div>
    );
};
export default Pokemon;
