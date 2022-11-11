import React from 'react'
import {
  Title,
  Image,
  Container,
} from './styles/ProjectCardStyles.jsx'

const ProjectCard = ({title, image, url}) => {
  return (
    <Container onClick={() =>  window.open(url, '_blank', 'noopener,noreferrer')}>
      <Title>{title}</Title>
      <Image src={image} alt=""/>
    </Container>
  )
}

export default ProjectCard