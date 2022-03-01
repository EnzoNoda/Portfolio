import React from 'react'
import {
  Container,
  Nomes,
  Portfolio,
  Proj,
  Projetos,
  ImgProjeto,
  ImgEye,
  Desc,
  DivIcon
} from './Style'
import memoria from '../../assets/memoria.png'
import bank from '../../assets/bank.png'
import eye from '../../assets/eye.png'
import git from '../../assets/github.png'
import alura from '../../assets/aluracord.png'
import form from '../../assets/form.png'
import todo from '../../assets/todo.png'
import port from '../../assets/port.png'
import cronometro from '../../assets/cronometro.png'
import color from '../../assets/color.png'
import tdee from '../../assets/tdee.png'

export default function Port() {
  return (
    <Container id="Port">
      <Portfolio>Projetos</Portfolio>
      <Projetos>
        <Proj>
          <Nomes>Portfólio Enzo Noda</Nomes>
          <ImgProjeto src={port} />
          <DivIcon>
            <a
              href="https://github.com/EnzoNoda/portfolio"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>
            Utilizado: React (Hooks, Function Components) e Styled Components
          </Desc>
        </Proj>
        <Proj>
          <Nomes>Jogo da Memória</Nomes>
          <ImgProjeto src={memoria} />
          <DivIcon>
            <a
              href="https://memoria-react-nine.vercel.app"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/Memoria-React"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: React (Hooks, Function Components) e CSS</Desc>
        </Proj>
        <Proj>
          <Nomes>Alura Discord</Nomes>
          <ImgProjeto src={alura} />
          <DivIcon>
            <a
              href="https://aluracord-starwars-liard.vercel.app"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/aluracord-starwars"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: NextJS, React (Hooks, Function Components)</Desc>
        </Proj>
        <Proj>
          <Nomes>App Bank</Nomes>
          <ImgProjeto src={bank} />
          <DivIcon>
            <a
              href="https://app-bank-one.vercel.app"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/app-bank"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>
            Utilizado: React (Hooks, Function Components) e Styled Components
          </Desc>
        </Proj>
        <Proj>
          <Nomes>Formulário</Nomes>
          <ImgProjeto src={form} />
          <DivIcon>
            <a
              href="https://form-react-alpha.vercel.app"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/form-react"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>
            Utilizado: React (Hooks, Function Components) e Material UI
          </Desc>
        </Proj>
        <Proj>
          <Nomes>Lista de Afazeres (To Do)</Nomes>
          <ImgProjeto src={todo} />
          <DivIcon>
            <a
              href="https://to-do-list-mauve.vercel.app"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/ToDoList"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: React (Hooks, Function Components) e CSS</Desc>
        </Proj>
        <Proj>
          <Nomes>Calculadora TDEE</Nomes>
          <ImgProjeto src={tdee} />
          <DivIcon>
            <a
              href="https://enzonoda.github.io/TDEECalculator/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/TDEECalculator"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: Javascript, HTML e CSS</Desc>
        </Proj>
        <Proj>
          <Nomes>Cores Aleatorias (Hex)</Nomes>
          <ImgProjeto src={color} />
          <DivIcon>
            <a
              href="https://enzonoda.github.io/ColorFlipper/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/ColorFlipper"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: Javascript, HTML e CSS</Desc>
        </Proj>
        <Proj>
          <Nomes>Cronômetro</Nomes>
          <ImgProjeto src={cronometro} />
          <DivIcon>
            <a
              href="https://enzonoda.github.io/Cronometro/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={eye} />
            </a>
            <a
              href="https://github.com/EnzoNoda/Cronometro"
              target="_blank"
              without
              rel="noreferrer"
            >
              <ImgEye src={git} />
            </a>
          </DivIcon>
          <Desc>Utilizado: Javascript, HTML e CSS</Desc>
        </Proj>
      </Projetos>
    </Container>
  )
}
