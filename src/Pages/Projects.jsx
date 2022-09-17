import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import projects from '../data'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container'>
      {projects.map((project) => (
        <ProjectCard className='flex-child' title={project.title} image={project.image} />
      ))}
    </div>
  )
}

export default Projects