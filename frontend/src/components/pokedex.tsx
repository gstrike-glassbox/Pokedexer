import { Card, Col, Row } from "antd";
import axios from "axios";
import { FC, useEffect, useState } from "react";

interface Pokemon {
    name: String,
    id: number
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
                response.data.results.forEach((pokemon: Pokemon) => pokemonArr.push({ name: pokemon.name, id: pokemon.id }));
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
                <Col span={8}>
                    <Card title={pokemon.length > 0 ? pokemon[0].name : ""} bordered={true}>
                        <img src={spriteUrl + `${pokemon.length > 0 ? pokemon[0].id : ""}.png`} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={pokemon.length > 0 ? pokemon[1].name : ""} bordered={true}>
                        <img src={spriteUrl + `${pokemon.length > 0 ? pokemon[1].id : ""}.png`} />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title={pokemon.length > 0 ? pokemon[2].name : ""} bordered={true}>
                        <img src={spriteUrl + `${pokemon.length > 0 ? pokemon[2].id : ""}.png`} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default Pokedex;
