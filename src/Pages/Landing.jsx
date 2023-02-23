import React from 'react'
import './Landing.css'
import Logos from '../Images/logos.png'
import WhoWeAre from '../Images/who.jpg'
// import {
//   Title, 
//   TitleWrapper,
//   SubTitle,
//   About,
//   AboutDescription,
//   EmphasizedText,
//   StatsWrapper,
//   Companies
// } from './styles/LandingStyles'


// import StatsCard from '../Components/StatsCard'
// import { stats } from '../Components/styles/StatsCardStyles'

const Landing = () => {
  return (
    <>
      <div className="container">
        <section className="header">
          <h1 className='header-title'>
            The Data Science Union
          </h1>
          <h2 className='header-subtitle'>
            UCLA's Premier Data Science Organization
          </h2>
        </section>
        <section className="who-we-are">
        <img src={WhoWeAre} alt='' className = 'who-img'/>
        </section>
        <section className="work">
            <h1 className="work-title">
              Where We've Gone
            </h1>
            <img src={Logos} alt='' className='company-logos'/>
        </section>
    </div>
      {/* <TitleWrapper>
        <Title>The Data Science Union</Title>
        <SubTitle>UCLA's Premier Data Science Organization</SubTitle>
      </TitleWrapper>
      <div className='about-container'>
        <TitleWrapper>
          <SubTitle>Who We Are</SubTitle>
        </TitleWrapper>
        <AboutDescription>
          <EmphasizedText>The Data Science Union</EmphasizedText> is a student organization founded in March of 2019. Our goal is to cultivate a thriving community of data science professionals at UCLA. The three components of our club - our self-designed curriculum, real-world projects, and professional development opportunities - prepare members for careers in data science.
        </AboutDescription>

      </div>
      <StatsWrapper>
        {stats.map((stat, i) => (
          <StatsCard
          number={stat.number}
          text={stat.text}
          />
          ))}       
      </StatsWrapper>
      <div className='for-clients-container'>
        <h1 className='for-clients-title'>
          For Clients
        </h1>
        <p className='for-clients-text'>
          At DSU, our most experienced members work pro bono to provide you with data-driven consulting services. We produce a thorough analysis of your data, so you can better your services with well-rounded insights.
        </p>
        <button className='for-clients-button'>
          Want to partner with us?
        </button>
      </div>
      <TitleWrapper>
        <SubTitle>
          Where We've Gone
        </SubTitle>
        <Companies src={Logos} alt=''/>
      </TitleWrapper> */}
    </>
  )
}

export default Landing

