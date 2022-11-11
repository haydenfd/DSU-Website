import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import projects from '../data'
import './Projects.css'

import {
  Title,
  TitleWrapper,
  Wrapper,
} from './styles/ProjectStyles'


const Projects = () => {
  return (
    <>
      <TitleWrapper>
        <Title>
          Projects
        </Title>
        <Wrapper>

        {/* {projects.map((project, i) => ( */}
          <ProjectCard
          title={projects[0].title}
          image={projects[0].image}
          url={projects[0].url}
          />          
          {/* ))}                */}
        </Wrapper>
      </TitleWrapper>
    </>

    // <div className="title-container">
    //   <h1 className="projects-title">Projects</h1>
    // <div className='projects-container'>
    //   <div className='row'>
    //     <div className='column' >
    //         <ProjectCard title={projects[0].title} image={projects[0].image}  />
    //     </div>
    //     <div className='column' >
    //       <ProjectCard title={projects[1].title} image={projects[1].image} url={projects[1].url} />
    //     </div>        
    //   </div>
    //   <div className='row'>
    //     <div className='column'>
    //       <ProjectCard title={projects[2].title} image={projects[2].image} url={projects[2].url}/>
    //     </div>
    //     <div className='column'>
    //       <ProjectCard title={projects[3].title} image={projects[3].image} url={projects[3].url}/>
    //     </div>        
    //   </div>
    //   <div className='row'>
    //     <div className='column'>
    //       <ProjectCard title={projects[4].title} image={projects[4].image} url={projects[4].url}/>
    //     </div>
    //     <div className='column'>
    //       <ProjectCard title={projects[5].title} image={projects[5].image} url={projects[5].url}/>
    //     </div>        
    //   </div>
    //   <div className='row'>
    //     <div className='column'>
    //       <ProjectCard title={projects[6].title} image={projects[6].image} url={projects[6].url}/>
    //     </div>
    //     <div className='column'>
    //       <ProjectCard title={projects[7].title} image={projects[7].image} url={projects[7].url}/>
    //     </div>        
    //   </div>      
    //   </div>
    //   </div>
  )
}

export default Projects