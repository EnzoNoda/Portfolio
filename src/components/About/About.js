import React from 'react'
import {
  Container,
  Sobre,
  Descricao,
  Skills,
  DivPerfil,
  DivSkills,
  ImgPerfil,
  Perfil,
  Habilidades,
  ImgLogo
} from '../About/Style'
import myImg from '../../assets/enzo.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/nodejs.png'

export default function About() {
  return (
    <Container id="About">
      <Sobre>Sobre Mim</Sobre>

      <Descricao>
        Olá, eu sou o Enzo, designer e apaixonado em tecnologias e linguagens
        front-end. Possuo conhecimento prévio HTML, CSS, JavaScript, e em NodeJS
        para back-end. Atualmente, estudo React, React Native e TypeScript. Me
        interesso em trabalhar com desenvolvimento de sites e aplicativos
        mobile. Aqui, você conhecerá um pouco do meu trabalho.
      </Descricao>

      <Skills>
        <DivPerfil>
          <ImgPerfil src={myImg} />
          <Perfil>Nome: Enzo Noda</Perfil>
          <Perfil>Idade: 22 anos</Perfil>
          <Perfil>Cidade: Apucarana-PR</Perfil>
          <Perfil>Email: enzo.noda@gmail.com</Perfil>
        </DivPerfil>
        <DivSkills>
          <Habilidades>Habilidades</Habilidades>
          <div>
            <ImgLogo src={html} />
            <ImgLogo src={css} />
            <ImgLogo src={javascript} />
          </div>
          <div>
            <ImgLogo src={typescript} />
            <ImgLogo src={react} />
            <ImgLogo src={nodejs} />
          </div>
        </DivSkills>
      </Skills>
    </Container>
  )
}
