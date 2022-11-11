import React from 'react'
import { 
  Container, 
  Number,
  Text,
} from './styles/StatsCardStyles'

const StatsCard = ({number, text}) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  )
}

export default StatsCard