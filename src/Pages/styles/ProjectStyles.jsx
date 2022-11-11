import styled from "styled-components"

const Title = styled.h1`
  color: #F3A47D;
  font-size: 2.5rem;
  font-weight:800;
  margin: 2.5vw 0 2vw 0;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Grid = styled.div`
    display: grid;
    grid-gap: 4vw;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%; 
    margin: auto;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {
  Title,
  TitleWrapper,
  Grid,
  Wrapper,
}