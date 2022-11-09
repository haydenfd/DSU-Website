// import React from "react";
// // import styled from "styled-components";
// import './TeamCard.css'
// // const CardContainer = styled.div`
// // width: 33%;
// // height: 33%;
// // `

// // const CardGrid = styled.ul`
// //   display: flex;
// //   flex-wrap: wrap;
// //   list-style: none;
// //   margin: 0;
// //   padding: 0;
// // `

// const TeamCard = ({name, major, year, position, img}) => { 
//   return (
//     <div className='team-card-container'>
//       <img src={img} alt="" className="team-card-img"/>
//       <h1 className="team-card-name">{name}</h1>
//       <h2 className="team-card-name">{position}</h2>
//       <h3 className="team-card-info">{major}, {year}</h3>
//     </div>
//   )
// }

// export default TeamCard;

import React from 'react'
import styled from 'styled-components'
import './TeamCard.css'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
  height: 300px;
  width: 300px;
  text-align: center;
  justify-content: center;
  align-items: center;
  // background-color: dodgerblue;
`

const Name = styled.p`
  font-weight: 600;
  font-size: 1.25em;
  padding: 1em 0 0.5em 0;
  font-family: Montserrat;
`
const Year = styled.p`
  font-weight: strong;
  font-size: 1em;
  font-style: italic;
`
const Position = styled.p`
  font-weight: strong;
  font-size: 1em;
`
const TeamCard = ({name, year, img, position}) => {
  return (
    <Container>
      <img src={img} alt='' className='member-image'/>
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Year>Class of '{year}</Year>
    </Container>
  )
}

export default TeamCard