import { NamedApiResource } from "./NamedApiResource";

export interface PokemonAbility {
    ability: NamedApiResource,
    isHidden: boolean,
    slot: number,
}