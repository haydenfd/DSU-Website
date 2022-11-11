import styled from "styled-components"

const Container = styled.div`
  display: flex;
  background-color: #E6E7FF;
  flex-direction: column;
  color: black;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  padding: 1em;
  height: 35vw;
  width: auto;
  &:hover {
    color: #F3A47D;
  }
`

const Title = styled.h1`
  font-size: 1.25em;
  text-align: center;
  padding-bottom: 1em;
`

const Image = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 2em;
`

export { 
  Title, 
  Image,
  Container
}

