import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import projects from '../data'

const Projects = () => {
  return (
    <div className='projects-container'>
      {projects.map((project) => (
        <ProjectCard title = {project.title} image = {project.image} />
      ))}
    </div>
  )
}

export default Projects