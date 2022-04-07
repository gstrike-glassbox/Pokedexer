export interface IPokemon {
    id: number;
    [name: string]: string | number | undefined | string[] | IPokemon;
    types: string[];
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
    maleBackSprite: string;
    femaleBackSprite?: string;
}
