package com.example.pokedexer.pokedex.dto;

import java.util.ArrayList;

public class GenericDisplayPokemon {
    private int id;
    private String name;
    private String maleFrontSprite;
    private String femaleFrontSprite;
    private String maleFrontSpriteShiny;
    private String femaleFrontSpriteShiny;
    private String maleBackSprite;
    private String femaleBackSprite;
    private ArrayList<String> types;

    public GenericDisplayPokemon(int id, String name, String maleFrontSprite, String femaleFrontSprite, String maleFrontSpriteShiny, String femaleFrontSpriteShiny, String maleBackSprite, String femaleBackSprite, ArrayList<String> types) {
        this.id = id;
        this.name = name;
        this.maleFrontSprite = maleFrontSprite;
        this.femaleFrontSprite = femaleFrontSprite;
        this.maleFrontSpriteShiny = maleFrontSpriteShiny;
        this.femaleFrontSpriteShiny = femaleFrontSpriteShiny;
        this.maleBackSprite = maleBackSprite;
        this.femaleBackSprite = femaleBackSprite;
        this.types = types;
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

    public String getMaleBackSprite() {
        return maleBackSprite;
    }

    public void setMaleBackSprite(String maleBackSprite) {
        this.maleBackSprite = maleBackSprite;
    }

    public String getFemaleBackSprite() {
        return femaleBackSprite;
    }

    public void setFemaleBackSprite(String femaleBackSprite) {
        this.femaleBackSprite = femaleBackSprite;
    }

    public ArrayList<String> getTypes() {
        return types;
    }

    public void setTypes(ArrayList<String> types) {
        this.types = types;
    }
}
