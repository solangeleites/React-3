import styled from 'styled-components';
import { mobile } from '../../queries/Queries';

export const Nav = styled.nav`
  background: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0px 20px;
  height: 80px;

  ${mobile} {
    padding: 0px 10px;
  }
`;

export const Logo = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile} {
    font-size: 22px;
    text-align: center;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-around;
  gap: 2rem;
  
  ${mobile}{
    min-width: 100%;
  }
`;
