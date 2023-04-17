import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mobile } from "../../queries/Queries";

export const LinkItemStyled = styled(NavLink)`
    font-size: 22px;
    text-decoration: none;
    color: #fff;
    display: flex;
    
    &.active {
        background: linear-gradient(
      294deg,
      rgba(255, 129, 227, 1) 25%,
      rgba(157, 232, 251, 1) 93%
    );
    -webkit-background-clip: text;
    color: transparent;
    }

    ${mobile} {
        font-size: 20px;
        text-align: center;
    }
`