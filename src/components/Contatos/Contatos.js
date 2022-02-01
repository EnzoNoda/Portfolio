import React from 'react'
import { Container, ContainerContato, Contato, ImgContatos } from './Style'
import Lkn from '../../assets/linkedin.png'
import Git from '../../assets/github.png'
import Insta from '../../assets/instagram.png'

export default function Contatos() {
  return (
    <Container id="Contatos">
      <Contato>Contatos</Contato>
      <ContainerContato>
        <a href="https://www.linkedin.com/in/enzo-noda/">
          <ImgContatos src={Lkn} />
        </a>
        <a href="https://github.com/EnzoNoda">
          <ImgContatos src={Git} />
        </a>
        <a href="https://www.instagram.com/enzo_noda/">
          <ImgContatos src={Insta} />
        </a>
      </ContainerContato>
    </Container>
  )
}
