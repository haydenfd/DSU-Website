import React from 'react'
import GeneralTeamCard from '../Components/GeneralTeamCard'
import ExecTeamCard from '../Components/ExecTeamCard'
import { general } from '../Members/general'
import { exec } from '../Members/exec'
import {
  Grid,
  Wrapper,
  Title,
  TitleWrapper,
  Description, 
  ExecWrapper
} from './styles/TeamStyles'

const Team = () => {
  return (
    <>
      <TitleWrapper>
        <Title>The Team</Title>
      </TitleWrapper>
      <ExecWrapper>
        <Title>&lt; Executive Board &gt;</Title>
        <Description>
          Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.
        </Description>
        <Wrapper>
          <Grid>
          {exec.map((member) => (
            <ExecTeamCard name={member.name} year={member.year} img={member.img} position={member.position} />
          ))}
          </Grid>  
        </Wrapper>
      </ExecWrapper>
      <ExecWrapper>
        <Title>&lt; General Members &gt;</Title>
        <Description>
          Our board members have diverse academic backgrounds and professional experiences, providing our club members with network and mentorship opportunities in various industries. With an emphasis on collaboration and community, the DSU board works together with members to grow as a club.
        </Description>        
        <Wrapper>
          <Grid>
          {general.map((member) => (
            <GeneralTeamCard name={member.name} year={member.year} img={member.img} />
          ))}
          </Grid>  
        </Wrapper>
      </ExecWrapper>
    </>
  )
}

export default Team