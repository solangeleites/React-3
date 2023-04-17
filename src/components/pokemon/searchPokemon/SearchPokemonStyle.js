import styled from 'styled-components';

export const PokeApiForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;
export const PokeApiTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-top: 20px;
  color: transparent;
  background: linear-gradient(120deg, #2E67BE 0%, #f4C50a 100%);
  -webkit-background-clip: text;
  background-clip: text;
`;

export const PokeApiInput = styled.input`
  padding: 0.6rem 1rem;
  border: none;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
    justify-content: center;
    align-items: center;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
  }
`;

export const PokeApiButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10px;
    margin-left: 10px;
    font-family: 'Poppins', sans-serif;
  &:hover{
    background: linear-gradient(90deg, #2E67BE 0%, #f4C50a 100%);
  }
`;