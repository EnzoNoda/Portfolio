import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Head,
  NavBarContainer,
  NavItem,
  MobileIcon,
  NavMenu,
  NavLogo,
  NavLinks
} from './Style'

import './Style.css'

export default function Header({ toggle }) {
  return (
    <Head>
      <NavBarContainer>
        <NavLogo to="/">E.N.</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks offset={-85} to="Home">
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks offset={-85} to="About">
              Sobre
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks offset={-85} to="Port">
              Projetos
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks offset={-85} to="Contatos">
              Contatos
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavBarContainer>
    </Head>
  )
}
