package com.example.pokedexer.pokedex.controller;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.services.PokemonService;
import me.sargunvohra.lib.pokekotlin.model.Pokemon;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pokemon")
@Controller
public class PokemonController {

    private PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/allpokemon")
    public List<Pokemon> getDisplayPokemon() {
        return pokemonService.getPokemon();
    }
}