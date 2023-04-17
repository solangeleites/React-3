import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
export const ContainerTodo = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & h2 {
    text-align: center;
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(
      294deg,
      rgba(255, 129, 227, 1) 25%,
      rgba(157, 232, 251, 1) 93%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  gap: 20px;
  height: fit-content;
`;

export const InputForm = styled.input`
  padding: 10px;
  width: 300px;
  height: fit-content;
  outline: none;
  border-radius: 5px;
  border: none;

  &::placeholder {
    font-family: 'Poppins', sans-serif;
  }
`;

export const ButtonForm = styled.button`
  border: none;
  padding: 10px;
  height: fit-content;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

&:hover {
  background: linear-gradient(
      294deg,
      rgba(255, 129, 227, 1) 25%,
      rgba(157, 232, 251, 1) 93%
    );
  }
`;

export const ContainerTareas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 390px;

  & p {
    border: 1px solid  rgba(157, 232, 251, 1);
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
export const Delete = styled (AiFillDelete)`
  cursor: pointer;
  color :rgba(255, 129, 227, 1);
  font-size: 22px;
`;
