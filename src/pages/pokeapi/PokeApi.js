import React, {useState } from 'react'
import axios from 'axios'
import CardPokemon from '../../components/pokemon/cardPokemon/CardPokemon';
import SearchPokemon from '../../components/pokemon/searchPokemon/SearchPokemon';
import { Container } from '../../components/pokemon/cardPokemon/CardPokemonStyle';

const PokeApi = () => {
const [data, setData] =useState(null);
const [error, setError] = useState(false);

const handleSubmit = async (e, pokemon) => {
  e.preventDefault();
  setData(null);
  setError(false);

 try {
  let selectedPokemon = pokemon.toLowerCase().trim();

  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
  setData(data);
 } catch (error) {
  setError('Pokemon no encontrado');
 }
};

  return (
<>
<Container>
<SearchPokemon handleSubmit={handleSubmit}/>
{data && <CardPokemon {...data} />}
</Container>
</>
  )
}

export default PokeApi