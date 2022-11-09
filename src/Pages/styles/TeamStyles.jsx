import styled from "styled-components"

const Grid = styled.div`
    display: inline-grid;
    grid-gap: 3em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    height: 100%;
    width: 100%; 
    margin: auto;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #F3A47D;
    font-size: 2.5rem;
    font-weight:800;
    margin: 1em 0 0.5em 0;
`

const ExecWrapper = styled.div`
    width: 85%;
    margin: auto;
    padding:1em;
`

const Description = styled.p`
    line-height: 2.5ch;
    font-size: 1.25em;
    margin-bottom: 1em;
`

export {
  Grid,
  Wrapper,
  Title,
  TitleWrapper,
  Description, 
  ExecWrapper
}