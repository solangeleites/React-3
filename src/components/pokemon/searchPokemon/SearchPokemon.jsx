import React, { useState } from 'react';
import {
  PokeApiButton,
  PokeApiForm,
  PokeApiInput,
  PokeApiTitle,
} from './SearchPokemonStyle';

const SearchPokemon = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState('');

  return (
    <>
      <PokeApiTitle>Busca tu pokemón favorito!</PokeApiTitle>
      <PokeApiForm 
      onSubmit={e => {handleSubmit(e, pokemon);  setPokemon('')}}>

        <PokeApiInput
          placeholder="Escribe aquí"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <PokeApiButton type="submit">Buscar</PokeApiButton>
      </PokeApiForm>
    </>
  );
};

export default SearchPokemon;
