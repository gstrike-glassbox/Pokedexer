package com.example.pokedexer.pokedex.controller;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.services.PokemonService;
import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private PokemonService pokemonService;
    public PokemonController() {
        pokemonService = new PokemonService();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<GenericDisplayPokemon> getAllPokemon() throws ExecutionException, InterruptedException {
        return pokemonService.getAllDisplayPokemon();
        //return clientRepository.findAll();
    }
}