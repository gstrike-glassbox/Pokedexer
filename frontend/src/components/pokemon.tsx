
import { FC, ReactElement, useState } from "react";
import { IPokemon } from "../interfaces/IPokemon";
import PokemonCard from "./pokemonCards/pokemonCard";

const Pokemon: FC<IPokemon> = (pokemon: IPokemon): ReactElement => {
    return (
        <div>
            
            <PokemonCard id={pokemon.id} name={(pokemon.name as string)} types={pokemon.types} maleFrontSprite={pokemon.maleFrontSprite} maleFrontSpriteShiny={pokemon.maleFrontSpriteShiny} femaleFrontSprite={pokemon.femaleFrontSprite}
                        femaleFrontSpriteShiny={pokemon.femaleFrontSpriteShiny} maleBackSprite={pokemon.maleBackSprite} femaleBackSprite={pokemon.femaleBackSprite} allowHover={true}/>
        </div>
    );
};
export default Pokemon;
