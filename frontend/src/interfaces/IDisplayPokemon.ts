export interface IDisplayPokemon {
    id: number;
    [name: string]: string | number | undefined;
    maleFrontSprite: string;
    maleFrontSpriteShiny: string;
    femaleFrontSprite?: string;
    femaleFrontSpriteShiny?: string;
}
