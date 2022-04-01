package com.example.pokedexer.pokedex.controller;

import me.sargunvohra.lib.pokekotlin.client.PokeApi;
import me.sargunvohra.lib.pokekotlin.client.PokeApiClient;
import me.sargunvohra.lib.pokekotlin.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {
    public PokemonController() {
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public NamedApiResourceList getAllPokemon() {
        PokeApi pokeApi = new PokeApiClient();
        return pokeApi.getPokemonList(0, 10);
        //return clientRepository.findAll();
    }
}