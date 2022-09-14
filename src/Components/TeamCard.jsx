import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
width: 25%;
height: 25%;
`

const CardGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

const TeamCard = ({name, major, year, position, img}) => { 
  return (
    <CardContainer>
      <CardGrid>
        <h1>
          Hayden
        </h1>
      </CardGrid>
    </CardContainer>
  )
}

export default TeamCard;