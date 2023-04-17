import React from 'react'
import { PokeApiCard, PokeApiContainer, PokeApiDesc, PokeApiImg, PokeApiName } from './CardPokemonStyle'

const CardPokemon = props => {
  const { name, sprites, types, id } = props;

  return (
   <PokeApiContainer   >
    <PokeApiCard>
        
    <PokeApiImg  src={sprites?.other.dream_world.front_default} alt={name} />
    <PokeApiName> {name}</PokeApiName>
    <PokeApiDesc>Número: {id}</PokeApiDesc>
    <PokeApiDesc>Tipo:   
    {types?.map((type, index) => (
      <span key={index}>{type.type.name} </span>
    ))}
    </PokeApiDesc>

    </PokeApiCard>
   </PokeApiContainer>
  )
}

export default CardPokemon