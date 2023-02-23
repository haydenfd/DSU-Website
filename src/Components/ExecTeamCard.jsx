import React from 'react'
import './TeamCard.css'
import {
  Container,
  Position,
  Name,
  Year,
  Image,
} from './styles/TeamCardStyles'

const ExecTeamCard = ({name, year, img, position}) => {
  return (
    <Container>
      <Image src={img} alt='' />
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Year>Class of '{year}</Year>
    </Container>
  )
}

export default ExecTeamCard