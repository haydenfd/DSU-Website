import React from 'react'
import ExecCard from '../../Components/styles/ExecCard/ExecCard'
import GenCard from '../../Components/styles/GenCard/GenCard'
import './Team.css'
import { exec } from '../../Members/exec'
import { general } from '../../Members/general'

const TheTeam = () => {
  return (
    <div className="team-container">

      <h2 className='team-title'>The Team</h2>

      <section className="executive-board-container">
        <h3 className='executive-board-title'>&lt; Executive Board &gt;</h3>
        <p className='executive-board-description'>
          Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.          
        </p>
        <div className='image-grid-container'>
          {/* <ExecCard name={exec[0].name}  position={exec[0].position} img={exec[0].img} />
          <ExecCard name={exec[1].name} position={exec[1].position} img={exec[1].img} />
          <ExecCard name={exec[2].name} year={exec[2].year} position={exec[2].position} img={exec[2].img} />    
          <ExecCard name={exec[3].name} year={exec[3].year} position = {exec[3].position} img={exec[3].img} />                     */}
          {exec.map((member) => (
            <ExecCard name={member.name} img={member.img} position={member.position} />
          ))}          
        </div>
      </section>
      <section className="general-member-container">
        <h2 className='general-member-title'>&lt; General Members &gt;</h2>
        <p className='general-member-description'>
          Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.          
        </p>
<div className='image-grid-container'>
          {/* <ExecCard name={exec[0].name}  position={exec[0].position} img={exec[0].img} />
          <ExecCard name={exec[1].name} position={exec[1].position} img={exec[1].img} />
          <ExecCard name={exec[2].name} year={exec[2].year} position={exec[2].position} img={exec[2].img} />    
          <ExecCard name={exec[3].name} year={exec[3].year} position = {exec[3].position} img={exec[3].img} />                     */}
          {general.map((member) => (
            <GenCard name={member.name} img={member.img} year={member.year} />
          ))}          
        </div>        
      </section>      
    </div>
  )
}

export default TheTeam