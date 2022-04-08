import { NamedApiResource } from "./NamedApiResource";
import { PokemonHeldItemVersion } from "./PokemonHeldItemVersion";

export interface PokemonHeldItem {
    item: NamedApiResource;
    versionDetails: PokemonHeldItemVersion[];
}