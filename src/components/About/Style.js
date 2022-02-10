import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #000;
  margin: 0 auto;
  align-items: center;
  border-bottom: 1px solid white;
`
export const Sobre = styled.h1`
  color: #fff;
  margin: 0;
  padding: 30px;
`
export const Descricao = styled.p`
  justify-self: center;
  color: #fff;
  margin: 0;
  max-width: 800px;
  padding: 10px;
  @media screen and (max-width: 700px) {
    max-width: 300px;
  }
`

export const Skills = styled.div`
  display: flex;
  background-color: #0b0a27;
  padding: 30px;
  border-radius: 25px;
  margin: 30px;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`
export const DivSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const DivPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
export const Perfil = styled.h2`
  color: #fff;
  padding: 4px;
  margin: 2px;
`
export const Habilidades = styled.h2`
  color: #fff;
  margin: 0;
  padding: 30px;
`

export const ImgPerfil = styled.img`
  width: 100px;
  height: 100px;
  margin: 30px;
`
export const ImgLogo = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  @media screen and (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
`
