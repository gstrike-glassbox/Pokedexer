import { NamedApiResource } from "./NamedApiResource";
import { PokemonAbility } from "./PokemonAbility";
import { PokemonHeldItem } from "./PokemonHeldItem";
import { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";
import { PokemonMove } from "./PokemonMove";
import { PokemonSprites } from "./PokemonSprites";
import { PokemonStat } from "./PokemonStat";
import { PokemonType } from "./PokemonType";
import { IVersionGameIndex } from "./VersionGameIndex";

export interface Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    species: NamedApiResource;
    abilities: PokemonAbility[];
    forms: NamedApiResource[];
    gameIndices: IVersionGameIndex[];
    heldItems: PokemonHeldItem[];
    moves: PokemonMove[];
    stats: PokemonStat[];
    types: PokemonType[]
    sprites: PokemonSprites;
}