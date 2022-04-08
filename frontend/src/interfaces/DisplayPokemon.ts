export interface DisplayPokemon {
    id: number;
    [name: string]: string | number | string[] | boolean | undefined;
    typeName: string[];
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
    maleBackSprite?: string;
    femaleBackSprite?: string;
}
