package com.example.pokedexer.pokedex.repositories;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

public class CacheRepository {
    static Cache<String, GenericDisplayPokemon> genericPokemonCache = Caffeine.newBuilder()
            .expireAfterWrite(1, TimeUnit.DAYS)
            .maximumSize(10_000)
            .build();

    public static void set(GenericDisplayPokemon genericDisplayPokemon) {
        GenericDisplayPokemon pokemon = getIfPresent(genericDisplayPokemon.getName());
        if (pokemon == null) {
            genericPokemonCache.put(genericDisplayPokemon.getName(), genericDisplayPokemon);
        }
    }
    public static GenericDisplayPokemon getIfPresent(String key) {
        return genericPokemonCache.getIfPresent(key);
    }

}
