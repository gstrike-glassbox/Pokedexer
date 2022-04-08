import { NamedApiResource } from "./NamedApiResource";

export interface PokemonStat {
    stat: NamedApiResource;
    effort: number,
    baseStat: number,
}