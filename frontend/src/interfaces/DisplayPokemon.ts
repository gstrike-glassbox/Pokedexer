import { PokemonSprites } from "./PokemonSprites";

export interface DisplayPokemon {
    id: number;
    [name: string]: string | number | string[] | boolean | undefined | PokemonSprites;
    typeName: string[];
    sprites: PokemonSprites;
}
