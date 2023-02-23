import React from 'react'
import './TeamCard.css'
import {
  Container,
  Name,
  Year,
  Image,
} from './styles/TeamCardStyles'

const GeneralTeamCard = ({name, year, img}) => {
  return (
    <Container>
      <Image src={img} alt='' />
      <Name>{name}</Name>
      <Year>Class of '{year}</Year>
    </Container>
  )
}

export default GeneralTeamCard