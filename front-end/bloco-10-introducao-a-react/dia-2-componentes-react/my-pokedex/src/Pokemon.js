import React from 'react';
// import './data';
// import pokemons from './data'
import PropTypes from 'prop-types';


class Pokemon extends React.Component{
  render() {
    const { pokemon: {name, type, averageWeight, image} } = this.props
    // const { cadaPokemon} = this.props
    // const pokemons = {
      
    //     id: 25,
    //     name: "Pikachu",
    //     type: 'Electric',
    //     averageWeight: {
    //         value: 6.0,
    //         measurementUnit: "kg"
    //     },
    //     image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
    //     moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
    // }
    return (
      <section className="cadaPoke">
        <p>Nome: {name} </p>
        <p>Tipo: {type} </p>
        <p>Peso médio: {`${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
        <figure>
          <img src={image} alt={`Imagem do pokemon ${name}`} />
        </figure>
      </section>
    );
  }
}
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};
export default Pokemon;
