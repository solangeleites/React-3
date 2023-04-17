import React from 'react'
import { LinkItemStyled } from './LinkItemStyle'


const LinkItem = ({to, children}) => {
  return (
    <LinkItemStyled 
    className={({isActive}) => (isActive ?   'active '  : ' ')}
    to={to}
    >
    {children}
    
    </LinkItemStyled>
   
  )
}

export default LinkItem