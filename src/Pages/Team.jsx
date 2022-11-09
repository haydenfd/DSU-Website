// import React from 'react'
// import './Team.css'
// import TeamCard from '../Components/TeamCard'
// import { exec } from '../Members'

// const Team = () => {
//   return (
//     <div className="team-container">
//       <h1 className="title">The Team</h1>
//       <div>
//         <h2 className='title'>&lt; Executive Board &gt;</h2>
//         <p className="description">Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.</p>
//       <div className='grid-container'>
//           <TeamCard img={exec[0].img} name={exec[0].name} position={exec[0].position} year={exec[0].year} major={exec[0].major} />
//           <TeamCard img={exec[1].img} name={exec[1].name} position={exec[1].position} year={exec[1].year} major={exec[1].major} />
//           <TeamCard img={exec[2].img} name={exec[2].name} position={exec[2].position} year={exec[2].year} major={exec[2].major} />
//           <TeamCard img={exec[3].img} name={exec[3].name} position={exec[3].position} year={exec[3].year} major={exec[3].major} />
//           <TeamCard img={exec[4].img} name={exec[4].name} position={exec[4].position} year={exec[4].year} major={exec[4].major} />
//           <TeamCard img={exec[5].img} name={exec[5].name} position={exec[5].position} year={exec[5].year} major={exec[5].major} />
//           <TeamCard img={exec[6].img} name={exec[6].name} position={exec[6].position} year={exec[6].year} major={exec[6].major} />
//           <TeamCard img={exec[7].img} name={exec[7].name} position={exec[7].position} year={exec[7].year} major={exec[7].major} /> 
//           <TeamCard img={exec[9].img} name={exec[9].name} position={exec[9].position} year={exec[9].year} major={exec[9].major} /> 
//           <TeamCard img={exec[10].img} name={exec[10].name} position={exec[10].position} year={exec[10].year} major={exec[10].major} /> 
//           <TeamCard img={exec[8].img} name={exec[8].name} position={exec[8].position} year={exec[8].year} major={exec[8].major} />           
          
    
//       </div>    
//       </div>
//       <div>
//         <h2 className='title'>&lt; Members &gt;</h2>
//         <p className="description">Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.</p>
//       </div>
//       <div>
//         <h2 className='title'>&lt; Interns &gt;</h2>
//         <p className="description">Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.</p>
//       </div>
//     </div>
//   )
// }

// export default Team

import React from 'react'
import TeamCard from '../Components/TeamCard'
import { general } from '../Members/general'
import styled from 'styled-components'
import {exec} from '../Members/exec'

const Grid = styled.div`
    display: inline-grid;
    grid-gap: 3em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    height: 100%;
    width: 100%; 
    margin: auto;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Team = () => {
  return (
  <>
    <h1>Executive Board</h1>
    <Wrapper>
      <Grid>
      {exec.map((member) => (
        <TeamCard name={member.name} year={member.year} img={member.img} position={member.position} />
        ))}
      </Grid>  
    </Wrapper>
    <h1>General Members</h1>
    <Wrapper>
      <Grid>
      {general.map((member) => (
        <TeamCard name={member.name} year={member.year} img={member.img} />
        ))}
      </Grid>  
    </Wrapper>
  </>
  )
}

export default Team