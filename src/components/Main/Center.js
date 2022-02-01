import React from 'react'
import { Center, Title, Foto, Description, Container } from './Style'
import myImage from '../../assets/enzo.png'

export default function Main() {
  return (
    <Center id="Home">
      <Container>
        <Title>Enzo Noda</Title>
        <Description>Desenvolvedor Front-End / Designer</Description>
      </Container>
      <Foto src={myImage} />
    </Center>
  )
}
