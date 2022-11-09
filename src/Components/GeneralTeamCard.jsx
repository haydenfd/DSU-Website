import React from 'react'
import './TeamCard.css'
import {
  Container,
  Name,
  Year
} from './styles/TeamCard'

const GeneralTeamCard = ({name, year, img}) => {
  return (
    <Container>
      <img src={img} alt='' className='member-image'/>
      <Name>{name}</Name>
      <Year>Class of '{year}</Year>
    </Container>
  )
}

export default GeneralTeamCard