import React from 'react'
import { Nav, Logo, NavbarList} from './NavbarStyles'
import LinkItem from '../linkItem/LinkItem'



const Navbar = () => {
  return (
    <Nav>
        <Logo>React 3.0</Logo>

        <NavbarList>
            <LinkItem to='/'>Home</LinkItem>
            <LinkItem to='todolist'>ToDo List</LinkItem>
            <LinkItem to='pokeapi'>Find Pokemon</LinkItem>

        </NavbarList>

    </Nav>
  )
}

export default Navbar