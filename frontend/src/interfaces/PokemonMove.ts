import { NamedApiResource } from "./NamedApiResource";
import { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";

export interface PokemonMove {
    move: NamedApiResource;
    versionGroupDetails:PokemonHeldItemVersion[]
}