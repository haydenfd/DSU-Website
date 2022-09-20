import React from "react";
// import styled from "styled-components";
import './TeamCard.css'
// const CardContainer = styled.div`
// width: 33%;
// height: 33%;
// `

// const CardGrid = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `

const TeamCard = ({name, major, year, position, img}) => { 
  return (
    <div className='team-card-container'>
      <img src={img} alt="" className="team-card-img"/>
      <h1 className="team-card-name">{name}</h1>
      <h2 className="team-card-name">{position}</h2>
      <h3 className="team-card-info">{major}, {year}</h3>
    </div>
  )
}

export default TeamCard;