import React from 'react'
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBarMenu
} from './Style'

export default function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink offset={50} to="Home" onClick={toggle}>
            Home
          </SideBarLink>
          <SideBarLink to="About" onClick={toggle}>
            About
          </SideBarLink>
          <SideBarLink to="Port" onClick={toggle}>
            Projetos
          </SideBarLink>
          <SideBarLink to="Contatos" onClick={toggle}>
            Contatos
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  )
}
