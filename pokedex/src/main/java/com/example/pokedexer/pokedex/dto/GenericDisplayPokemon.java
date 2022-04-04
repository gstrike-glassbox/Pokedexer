package com.example.pokedexer.pokedex.dto;

public class GenericDisplayPokemon {
    private int id;
    private String name;
    private String maleFrontSprite;
    private String femaleFrontSprite;
    private String maleFrontSpriteShiny;
    private String femaleFrontSpriteShiny;

    public GenericDisplayPokemon(int id, String name, String maleFrontSprite, String femaleFrontSprite, String maleFrontSpriteShiny, String femaleFrontSpriteShiny) {
        this.id = id;
        this.name = name;
        this.maleFrontSprite = maleFrontSprite;
        this.femaleFrontSprite = femaleFrontSprite;
        this.maleFrontSpriteShiny = maleFrontSpriteShiny;
        this.femaleFrontSpriteShiny = femaleFrontSpriteShiny;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMaleFrontSprite() {
        return maleFrontSprite;
    }

    public void setMaleFrontSprite(String maleFrontSprite) {
        this.maleFrontSprite = maleFrontSprite;
    }

    public String getFemaleFrontSprite() {
        return femaleFrontSprite;
    }

    public void setFemaleFrontSprite(String femaleFrontSprite) {
        this.femaleFrontSprite = femaleFrontSprite;
    }

    public String getMaleFrontSpriteShiny() {
        return maleFrontSpriteShiny;
    }

    public void setMaleFrontSpriteShiny(String maleFrontSpriteShiny) {
        this.maleFrontSpriteShiny = maleFrontSpriteShiny;
    }

    public String getFemaleFrontSpriteShiny() {
        return femaleFrontSpriteShiny;
    }

    public void setFemaleFrontSpriteShiny(String femaleFrontSpriteShiny) {
        this.femaleFrontSpriteShiny = femaleFrontSpriteShiny;
    }
}
