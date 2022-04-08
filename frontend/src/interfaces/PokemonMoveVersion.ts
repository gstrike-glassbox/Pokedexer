import { NamedApiResource } from "./NamedApiResource";

export interface PokemonMoveVersion {
    moveLearnedMethod: NamedApiResource;
    versionGroup: NamedApiResource;
    levelLearnedAt: number;
}