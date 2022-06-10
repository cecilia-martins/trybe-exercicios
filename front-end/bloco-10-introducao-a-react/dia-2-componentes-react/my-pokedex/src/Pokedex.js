import React from 'react';
// import pokemons from './data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component{
  render() {
    // para cada pokemon chamar o Pokemon Componente
    const { pokemons } = this.props;
    return (
      <section>
        {pokemons.map((cadaPo) => <Pokemon key={cadaPo.id} pokemon={cadaPo} />)}
      </section>
    );
  }
}

export default Pokedex;
