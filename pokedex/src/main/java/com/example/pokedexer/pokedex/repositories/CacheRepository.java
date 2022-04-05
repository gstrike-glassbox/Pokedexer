package com.example.pokedexer.pokedex.repositories;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

public class CacheRepository {
    static Cache<String, Pokemon> genericPokemonCache = Caffeine.newBuilder()
            .expireAfterWrite(1, TimeUnit.DAYS)
            .maximumSize(10_000)
            .build();

    public static void set(Pokemon genericDisplayPokemon) {
        Pokemon pokemon = getIfPresent(genericDisplayPokemon.getName());
        if (pokemon == null) {
            genericPokemonCache.put(genericDisplayPokemon.getName(), genericDisplayPokemon);
        }
    }
    public static void setDisplayPokemon(Pokemon genericDisplayPokemon) {
        Pokemon pokemon = getIfPresent(genericDisplayPokemon.getName());
        if (pokemon == null) {
            genericPokemonCache.put(genericDisplayPokemon.getName(), genericDisplayPokemon);
        }
    }
    public static Pokemon getIfPresent(String key) {
        return genericPokemonCache.getIfPresent(key);
    }

}
