import React, { Component } from 'react';
import './App.css';
// import DadJoke from './pra-fixar-1/DadJoke';
// import Counter from './pra-fixar-1/Counter';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters : [],
    }
  }
  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.results
      })
    })
  }
  componentDidMount() {
    this.fetchCharacters();
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="App">
      <h1>
        Ricky and Morty Characters:
      </h1>
      <div className="body">
        {characters.map(({ name, image }) => {
          return (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default App;
