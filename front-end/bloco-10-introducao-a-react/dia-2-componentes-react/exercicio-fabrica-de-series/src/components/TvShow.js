import React from 'react';
import PropTypes from 'prop-types'

class TvShow extends React.Component {
  render() {
    // console.log(this.props);
    const {cadaSerie} = this.props;
    return (
      <article>
            <h2>Título da Série: {cadaSerie.name} </h2>
            <img src={cadaSerie.image} alt={ `Foto de capa da série ${cadaSerie.name}` }/>
            <p>Gênero: <strong>{cadaSerie.genre}</strong></p>
            <p>Personagens: {cadaSerie.characters.map((personagem) => {
              return <strong>{`${personagem}|`} </strong>
            })}</p>
            <p>Número de Temporadas: <strong>{cadaSerie.info.seasons}</strong> </p>
            <p>Número de Episodios: <strong>{cadaSerie.info.episodes}</strong> </p>
          </article>
    )
  }
} 
TvShow.propTypes = {
  cadaSerie: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string), //se é um array de string
    info: PropTypes.shape({
      seasons: PropTypes.string,
      episodes: PropTypes.number
    })
  }).isRequired
}
export default TvShow;