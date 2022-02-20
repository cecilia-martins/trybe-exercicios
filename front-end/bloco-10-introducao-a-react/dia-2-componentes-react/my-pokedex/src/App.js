import React from 'react'
import './App.css'
import pokemons from './data'
// import Pokemon from './Pokemon'
import Pokedex from './Pokedex'

function App() {

  return(
    <div>
      <h1>Pokedex</h1>
      {/* <Pokemon /> */}
      <Pokedex pokemons={pokemons} />
    </div>
  )
}

export default App;
