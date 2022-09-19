import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({title, image, url}) => {
  return (
    <>
      <div className='project-card-container' onClick={() =>  window.open(url, '_blank', 'noopener,noreferrer')}>
        <h1 className='project-card-title'>{title}</h1>
        <img src={image} alt="" className='project-card-image'/>

      </div>
    </>
  )
}

export default ProjectCard