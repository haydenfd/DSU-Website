import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
  height: 16vw;
  width: 10vw;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const Name = styled.p`
  font-weight: 600;
  font-size: 1.5em;
  padding: 1em 0 0.5em 0;
  text-align:center;
`
const Year = styled.p`
  font-weight: 400;
  font-size: 1em;
  font-style: italic;
`
const Position = styled.p`
  font-weight: 400;
  font-size: 1.25em;
  text-align:center;
  margin-bottom:0.5em;
`

export {
  Container, 
  Name,
  Position,
  Year
}