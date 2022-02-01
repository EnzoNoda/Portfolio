import React from 'react'
import { Head, Home, About, Projects, Contact } from './Style'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Style.css'

export default function Header() {
  return (
    <Head>
      <Home>
        <AnchorLink href="#Home">Home</AnchorLink>
      </Home>
      <About>
        <AnchorLink href="#About">Sobre</AnchorLink>
      </About>
      <Projects>
        <AnchorLink href="#Port">Projetos</AnchorLink>
      </Projects>
      <Contact>
        <AnchorLink href="#Contatos">Contatos</AnchorLink>
      </Contact>
    </Head>
  )
}
