package com.example.pokedexer.pokedex.services;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.repositories.CacheRepository;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.NamedApiResourceList;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import me.sargunvohra.lib.pokekotlin.model.PokemonSprites;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class PokemonService {
    private PokeApi pokeApi;
    private List<GenericDisplayPokemon> pokemonList;
    private static final int TOTAL_POKEMON = 898;

    @Autowired
    public PokemonService() {
      pokeApi = new PokeApiClient();
      pokemonList = getAllDisplayPokemon();
      System.out.println("Here");
    }

    private List<GenericDisplayPokemon> getAllDisplayPokemon() {
        List<GenericDisplayPokemon> genericDisplayPokemonList = new ArrayList<>();
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
    public List<GenericDisplayPokemon> getAllPokemon() {
        return pokemonList;
    }
}
