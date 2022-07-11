const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return response.data;
}

async function main () {
  
  for (let index = 1; index < 50; index++) {
    // const element = array[index];
    const pokemon = await getPokemonById(1);

    console.log(`Pokemon: ${pokemon.name}`);
  }

  
}

main();