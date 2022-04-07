import './App.css';
import Navbar from './components/layout/nav';
import Pokedex from './components/pokedex';
import { Route, Routes } from 'react-router-dom';
import Pokemon from './components/pokemon';
import { IPokemon } from './interfaces/IPokemon';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';


export const PokemonContext = React.createContext<IPokemon[]>([]);

function App() {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPokemon = async () => {
    setIsLoading(true);
    axios.get("http://localhost:8080/pokemon/displaypokemon")
        .then((response) => {
            let pokemonArr: IPokemon[] = [];
            response.data.forEach((pokemon: IPokemon) => pokemonArr.push({ name: pokemon.name, id: pokemon.id, types: pokemon.types, maleFrontSprite: pokemon.maleFrontSprite, maleBackSprite: pokemon.maleBackSprite,
                maleFrontSpriteShiny: pokemon.maleFrontSpriteShiny, femaleFrontSprite: pokemon.femaleFrontSprite, femaleFrontSpriteShiny: pokemon.femaleFrontSpriteShiny,
                femaleBackSprite: pokemon.femaleBackSprite
                }));
            setPokemon([...pokemonArr]);
        });
    setIsLoading(false);
}

useEffect(() => {
    getAllPokemon();
}, []);
if(isLoading) return <div>Loading....</div>
  return (
    <>
      <div> 
        <PokemonContext.Provider value={pokemon}>  

          <Navbar />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Routes>
        </PokemonContext.Provider>
      </div>


    </>
  );
}

export { App };
