import styled from 'styled-components'

export const Center = styled.div`
  background: linear-gradient(270deg, #131246 30.37%, #000000 98.49%);
  display: flex;
  border-bottom: 1px solid white;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const Container = styled.div`
  display: inline-block;
`
export const Title = styled.h1`
  color: #fff;
  display: flex;
`
export const Description = styled.h2`
  color: #fff;
  display: flex;
  background-color: #4b1eb3;
  border-radius: 7px;
  padding: 3px 10px 3px;
  @media screen and (max-width: 700px) {
    max-width: 300px;
  }
`

export const Foto = styled.img`
  display: flex;
  justify-content: flex-end;
  width: 400px;
  height: 400px;
  padding: 50px;
  @media screen and (max-width: 700px) {
    width: 300px;
    height: 300px;
  }
`
