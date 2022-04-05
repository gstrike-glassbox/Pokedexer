package com.example.pokedexer.pokedex.controller;

import com.example.pokedexer.pokedex.dto.GenericDisplayPokemon;
import com.example.pokedexer.pokedex.services.PokemonService;
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
    @GetMapping("/displaypokemon")
    public List<GenericDisplayPokemon> getDisplayPokemon() {
        return pokemonService.getAllDisplayPokemon();
    }
}