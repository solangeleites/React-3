import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80vh;

`
export const PokeApiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const PokeApiCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 400px;
  border: 1px solid white;
  border-radius: 10px;
`;
export const PokeApiImg = styled.img`
  width: 225px;
  height: 225px;
  filter: drop-shadow(5px 5px 5px #d1d1d19c);`;
export const PokeApiName = styled.h2`
  font-size: 18px;
`;
export const PokeApiDesc = styled.p`
  font-size: 14px;
`;