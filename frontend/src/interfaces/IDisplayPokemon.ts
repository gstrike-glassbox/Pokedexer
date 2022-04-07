export interface IDisplayPokemon {
    id: number;
    [name: string]: string | number | string[] | boolean | undefined;
    types: string[];
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
    maleBackSprite?: string;
    femaleBackSprite?: string;
}
