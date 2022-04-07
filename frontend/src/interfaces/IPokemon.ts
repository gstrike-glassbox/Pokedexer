export interface IPokemon {
    id: number;
    name: string;
    types: string[];
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
    maleBackSprite: string;
    femaleBackSprite?: string;
}
