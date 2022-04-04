import { Card, Col, Row } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import './pokedex.css';

interface Pokemon {
    id: number,
    name: string,
    maleFrontSprite: string,
    maleFrontSpriteShiny: string,
    femaleFrontSprite?: string,
    femaleFrontSpriteShiny?: string,
}

const Pokedex: FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    let spriteUrl: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const getAllPokemon = async () => {
        setIsLoading(true);
        axios.get("http://localhost:8080/pokemon/all")
            .then((response) => {
                let pokemonArr: Pokemon[] = [];
                response.data.forEach((pokemon: Pokemon) => pokemonArr.push({ name: pokemon.name, id: pokemon.id, maleFrontSprite: pokemon.maleFrontSprite, maleFrontSpriteShiny: pokemon.maleFrontSpriteShiny, femaleFrontSprite: pokemon.femaleFrontSprite, femaleFrontSpriteShiny: pokemon.femaleFrontSpriteShiny }));
                setPokemon([...pokemonArr]);
            });
        setIsLoading(false);
    }

    useEffect(() => {
        getAllPokemon();
    }, []);

    return (
        <div className="site-card-wrapper" style={{ textAlign: 'center', zIndex: 1, width: '100%' }}>
            <Row gutter={16}>
                {console.log(JSON.stringify(pokemon))}
                {pokemon.length > 0 ? pokemon.map(poke => {
                     return <Col span={8}>
                     <Card title={poke.name} bordered={true}>
                         <img src={poke.maleFrontSprite} alt="pokemon-male" />
                         <img src={poke.maleFrontSpriteShiny} alt="pokemon-male-shiny" />
                         {poke.femaleFrontSprite ? <img className="female-sprite" src={poke.femaleFrontSprite} alt="pokemon-female" /> : null}
                         {poke.femaleFrontSpriteShiny ? <img className="female-sprite" src={poke.femaleFrontSpriteShiny} alt="pokemon-female-shiny" /> : null}
                     </Card>
                 </Col>
                }) : ""}
            </Row>
        </div>
    );
}
export default Pokedex;
