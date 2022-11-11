import React from 'react'
import './TeamCard.css'
import {
  Container,
  Position,
  Name,
  Year
} from './styles/TeamCardStyles'

const ExecTeamCard = ({name, year, img, position}) => {
  return (
    <Container>
      <img src={img} alt='' className='member-image'/>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Year>Class of '{year}</Year>
    </Container>
  )
}

export default ExecTeamCard