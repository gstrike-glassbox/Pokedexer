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
                {pokemon.length > 0 ? pokemon.map(poke => {
                     return <Col span={8}>
                     <Card title={poke.name} bordered={true}>
                         <img src={spriteUrl + `${poke.id}.png`} alt="pokemon" />
                     </Card>
                 </Col>
                }) : ""}
            </Row>
        </div>
    );
}
export default Pokedex;
