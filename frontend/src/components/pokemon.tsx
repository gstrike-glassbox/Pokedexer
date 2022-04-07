
import { FC, ReactElement, useContext, useState } from "react";
import { useParams } from "react-router";
import { PokemonContext } from "../App";
import { IPokemon } from "../interfaces/IPokemon";
import PokemonCard from "./pokemonCards/pokemonCard";

const Pokemon: FC = () => {
    const pokemons = useContext(PokemonContext)

    const {name:pokemonName} = useParams<{name:string}>();
    const pokemon = pokemons.find(e=> e.name === pokemonName);


    console.log(pokemon,pokemonName,pokemons)
    if(!pokemon) return <div>NotFound</div>
    return (
        <div>
            {console.log("state: " + JSON.stringify(pokemon))}
            <PokemonCard id={pokemon.id} name={(pokemon.name as string)} types={pokemon.types} maleFrontSprite={pokemon.maleFrontSprite} maleFrontSpriteShiny={pokemon.maleFrontSpriteShiny} femaleFrontSprite={pokemon.femaleFrontSprite}
                        femaleFrontSpriteShiny={pokemon.femaleFrontSpriteShiny} maleBackSprite={pokemon.maleBackSprite} femaleBackSprite={pokemon.femaleBackSprite} allowHover={true}/>
        </div>
    );
};
export default Pokemon;
