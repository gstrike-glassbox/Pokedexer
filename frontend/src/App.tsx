import './App.css';
import Navbar from './components/layout/nav';
import Pokedex from './components/pokedex';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Pokemon from './components/pokemon';
import { IPokemon } from './interfaces/IPokemon';

let pokemon: IPokemon = {
  id: 0,
  types: [],
  maleFrontSprite: '',
  maleFrontSpriteShiny: '',
  maleBackSprite: ''
};

function SetPokemon(poke: IPokemon) {
   pokemon = poke;
}

function App() {

  return (
    <>
      <div>
          <Routes>
            <Route path="/pokemon/:name" element={<Pokemon {...pokemon}/>} />
          </Routes>
      </div>
      <Navbar />
      <Pokedex />

    </>
  );
}

export {App, SetPokemon};
