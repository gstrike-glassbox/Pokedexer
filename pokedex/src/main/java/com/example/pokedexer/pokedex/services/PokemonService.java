package com.example.pokedexer.pokedex.services;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.repositories.CacheRepository;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.NamedApiResourceList;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import me.sargunvohra.lib.pokekotlin.model.PokemonSprites;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class PokemonService {
    private PokeApi pokeApi;
    private static final int TOTAL_POKEMON = 20;

    public PokemonService() {
      pokeApi = new PokeApiClient();
    }

    public List<GenericDisplayPokemon> getAllDisplayPokemon() throws ExecutionException, InterruptedException {
        List<GenericDisplayPokemon> genericDisplayPokemonList = new ArrayList<>();
        CompletableFuture<NamedApiResourceList> pokemonList = CompletableFuture.supplyAsync(() -> pokeApi.getPokemonList(0, 10));
        while (!pokemonList.isDone()) {
            System.out.println("CompletableFuture is not finished yet...");
        }
        for (int i = 1; i <= TOTAL_POKEMON; i++) {
            Pokemon currentPokemon = pokeApi.getPokemon(i);
            GenericDisplayPokemon pokemonFromCache = CacheRepository.getIfPresent(currentPokemon.getName());
            if (pokemonFromCache != null) {
                genericDisplayPokemonList.add(new GenericDisplayPokemon(pokemonFromCache.getId(), pokemonFromCache.getName(),
                        pokemonFromCache.getMaleFrontSprite(), pokemonFromCache.getFemaleFrontSprite(),
                        pokemonFromCache.getMaleFrontSpriteShiny(), pokemonFromCache.getFemaleFrontSpriteShiny()));
                System.out.println("From Cache");
            }
            else {
                PokemonSprites currentPokemonSprites = currentPokemon.getSprites();
                String maleFrontSprite = currentPokemonSprites.getFrontDefault();
                String femaleFrontSprite = currentPokemonSprites.getFrontFemale();
                String maleFrontSpriteShiny = currentPokemonSprites.getFrontShiny();
                String femaleFrontSpriteShiny = currentPokemonSprites.getFrontShinyFemale();
                GenericDisplayPokemon genericDisplayPokemon = new GenericDisplayPokemon(currentPokemon.getId(), currentPokemon.getName(), maleFrontSprite, femaleFrontSprite, maleFrontSpriteShiny, femaleFrontSpriteShiny);
                CacheRepository.set(genericDisplayPokemon);
                genericDisplayPokemonList.add(new GenericDisplayPokemon(currentPokemon.getId(), currentPokemon.getName(), maleFrontSprite, femaleFrontSprite, maleFrontSpriteShiny, femaleFrontSpriteShiny));
            }
        }
        return genericDisplayPokemonList;
    }
}
