import React from 'react'
import { Container, Nomes, Portfolio, Projetos } from './Style'

export default function Port() {
  return (
    <Container id="Port">
      <Portfolio>Projetos</Portfolio>
      <Projetos>
        <Nomes>JavaScript</Nomes>
        <Nomes>React</Nomes>
        <Nomes>React-Native</Nomes>
      </Projetos>
    </Container>
  )
}
