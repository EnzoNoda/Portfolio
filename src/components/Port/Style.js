import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: #0b0a27;
  margin: 0 auto;
  align-items: center;
  border-bottom: 1px solid white;
`
export const Portfolio = styled.h1`
  color: #fff;
  margin: 0;
  padding: 30px;
`
export const Projetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  padding: 30px;
  margin: 30px;
  border-radius: 10px;
  flex-wrap: wrap;
`
export const Nomes = styled.h2`
  color: #000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`
export const Desc = styled.p`
  color: #000;
  margin-left: auto;
  margin-right: auto;
  margin-top: 210px;
  font-weight: bold;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  max-width: 280px;
  @media screen and (max-width: 700px) {
    margin-top: 180px;
    max-width: 200px;
  }
`
export const Proj = styled.div`
  display: flex;
  position: relative;
  background-color: #d3dae6;
  border-radius: 10px;
  margin: 5px;
  padding-bottom: 50px;
  @media screen and (max-width: 700px) {
    padding-bottom: 60px;
  }
`

export const ImgProjeto = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: 150px;
  margin: 20px;
  padding-top: 28px;
  @media screen and (max-width: 700px) {
    height: 120px;
  }
`
export const DivIcon = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.25s;
  &:hover {
    opacity: 1;
  }
`
export const ImgEye = styled.img`
  width: 50px;
  height: 50px;
`
export const ImgLogo = styled.img`
  width: 100%;
  height: 30px;
`
