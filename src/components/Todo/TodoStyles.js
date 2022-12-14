import styled from 'styled-components';

export const ContainerTodo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
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
  border-radius:5px;
  border:none;
`;

export const ButtonForm = styled.button`
  border: none;
  padding: 10px;
  height:fit-content;
  border-radius:5px;
  cursor: pointer;
`;

export const ContainerTareas = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap: 20px;

  & p{
    border: 1px solid purple;
    padding:10px;
    width: 100%;
    border-radius:5px;

    & span{
    background:crimson;
    padding: 5px;
    border-radius:5px;
    cursor:pointer;
  }
  }

`

