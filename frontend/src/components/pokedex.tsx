import { Card, Col, Input, Row } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import './pokedex.css';

interface Pokemon {
    id: number;
    [name: string]: string | number | undefined;
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
}

const Pokedex: FC = () => {

    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParam] = useState(["name", "id"]);
    const [q, setQ] = useState("");

    const getAllPokemon = async () => {
        setIsLoading(true);
        axios.get("http://localhost:8080/pokemon/displaypokemon")
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

    const search = (pokemonArr: Pokemon[]) => {
        return pokemonArr.filter((pokemon: Pokemon) => {
            return searchParam.some((filteredPokemon) => {
                return (
                    // @ts-ignore: Object is possibly 'null'.
                    pokemon[filteredPokemon]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div className="site-card-wrapper" style={{ textAlign: 'center', zIndex: 1, width: '100%' }}>
            <Row gutter={16} style={{paddingBottom: '30px', paddingTop: '30px'}}> 
            <Col span={8}> </Col>
            <Col span={8}>
            <div className="search-wrapper">
                <Input placeholder="Search by name or id Eg: Pikachu, 167 (spinarak)"
                    name="search-form"
                    id="search-form"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    type="search"
                />
            </div>
             </Col>
            <Col span={8}> </Col>
            </Row>
            <Row gutter={16}>
                {pokemon.length > 0 ? search(pokemon).map(poke => {
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
