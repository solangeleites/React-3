import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background: #181920;
        color: #fcfcfcfc;
    }
`;
export default GlobalStyle;
