import styled from 'styled-components'

const stats = [
  {
    number: '60+',
    text: 'active members',
  },
  {
    number: '10+',
    text: 'internal projects',
  },
  {
    number: '5+',
    text: 'client projects',
  },
  {
    number: '15+',
    text: 'companies represented',
  },
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
  padding: 1em;
`

const Number = styled.h1`
  color: #f3a47d;
  font-size: 4em;
`

const Text = styled.h1`
  color: #5A5A5A;
  font-size: 2em;
  text-align: center;
  width: 99%;
  font-weight: 700;
`

export {
  Container, 
  Number,
  Text,
  stats,
}