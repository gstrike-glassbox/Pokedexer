import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/nav';
import Pokedex from './components/pokedex';
import { Col, Row } from 'antd';

function App() {
  return (
    <>
      <Navbar />
      <Pokedex />

    </>
  );
}

export default App;
