import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import projects from '../data'
import './Projects.css'
import Grid from '@mui/material/Grid';


const Projects = () => {
  return (
    <div className='projects-container'>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

      {projects.map((project) => (
        <Grid item md={8}>
        <ProjectCard className='flex-child' title={project.title} image={project.image} />
        </Grid>
      ))}
      </Grid>
    </div>
  )
}

export default Projects