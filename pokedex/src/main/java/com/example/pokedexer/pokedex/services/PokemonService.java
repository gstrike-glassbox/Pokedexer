package com.example.pokedexer.pokedex.services;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.repositories.RedisManager;
import com.example.pokedexer.pokedex.repositories.RedisRepository;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import me.sargunvohra.lib.pokekotlin.model.PokemonSprites;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import redis.clients.jedis.JedisPool;

import java.util.ArrayList;
import java.util.List;

@Service
public class PokemonService {
    private PokeApi pokeApi;
    private List<Pokemon> pokemonList;
    private List<GenericDisplayPokemon> displayPokemonList;
    private static final int TOTAL_POKEMON = 898;
    private static JedisPool jedisPool;

    @Autowired
    public PokemonService() {
        jedisPool = RedisManager.initJedisPool();
        pokeApi = new PokeApiClient();
        pokemonList = getAllPokemon();
        displayPokemonList = new ArrayList<>();
    }

    private List<Pokemon> getAllPokemon() {
        List<Pokemon> pokemonFromCache = RedisRepository.getObjectList("allPokemon", jedisPool, Pokemon.class);

        if (pokemonFromCache == null || (pokemonFromCache != null && pokemonFromCache.size() < TOTAL_POKEMON)) {
            List<Pokemon> pokemonList = new ArrayList<>();
            for (int i = 1; i <= TOTAL_POKEMON; i++) {
                Pokemon currentPokemon = pokeApi.getPokemon(i);
                pokemonList.add(currentPokemon);
                System.out.println(currentPokemon.getName());
            }
            RedisRepository.setObject("allPokemon", pokemonList, jedisPool);
            return pokemonList;
        } else {
            return pokemonFromCache;
        }

    }

    public List<GenericDisplayPokemon> getAllDisplayPokemon() {
        List<GenericDisplayPokemon> pokemonFromCache = RedisRepository.getObjectList("displayPokemon", jedisPool, GenericDisplayPokemon.class);

        if (pokemonFromCache == null || (pokemonFromCache != null && pokemonList.size() > pokemonFromCache.size())) {
            if (displayPokemonList.size() == 0) {
                for (int i = 0; i < pokemonList.size(); i++) {
                    Pokemon currentPokemon = pokemonList.get(i);
                    PokemonSprites currentPokemonSprites = currentPokemon.getSprites();
                    String maleFrontSprite = currentPokemonSprites.getFrontDefault();
                    String femaleFrontSprite = currentPokemonSprites.getFrontFemale();
                    String maleFrontSpriteShiny = currentPokemonSprites.getFrontShiny();
                    String femaleFrontSpriteShiny = currentPokemonSprites.getFrontShinyFemale();
                    displayPokemonList.add(new GenericDisplayPokemon(currentPokemon.getId(), currentPokemon.getName(), maleFrontSprite, femaleFrontSprite, maleFrontSpriteShiny, femaleFrontSpriteShiny));
                }
                RedisRepository.setObject("displayPokemon", displayPokemonList, jedisPool);
            }
            return displayPokemonList;
        }
        else {
            return pokemonFromCache;
        }
    }
}
