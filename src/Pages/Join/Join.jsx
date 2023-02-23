import React from 'react'
import './Join.css'

import {
  Question, 
  Response,
  QuestionContainer,
} from './Join.style'


const Join = () => {
  return (
    <div className="join-container">

    <div className="recruitment-container">
      <h2 className='recruitment-section-title'>Recruitment</h2>
        <p className="recruitment-text">
          Our recruitment cycle has concluded, but we will be back in Spring 2023! If you are a prospective applicant, stay tuned for more updates!
        </p> 
    </div>
    <div className="faq-container">
      <h2 className='faq-section-title'>Frequently Asked Questions</h2>
      <QuestionContainer>
        <Question className='recruitment-text'>
          Q. What does DSU look for in their applicants?
        </Question>
        <Response className='recruitment-text'>
          For prospective members, we are looking for students who are passionate about developing their technical skills alongside like-minded peers and want to answer questions about the day-to-days of our world through an evidence-based, data-driven method.
        </Response>
      </QuestionContainer>
        
      <QuestionContainer>
        <Question className='recruitment-text'>
          Q. What skills is DSU expecting? Do I need to take certain classes to be prepared?    
        </Question>
        <Response className='recruitment-text'>
          We recommend that applicants have some experience with data analysis or statistical programming. However, we don't expect you to know everything because we will train you in preparation for data projects!
        </Response>          
      </QuestionContainer>
        
      <QuestionContainer>
        <Question className='recruitment-text'>
          Q. How can I prepare for interviews?    
        </Question>
        <Response className='recruitment-text'>
          Be yourself, and please bring your personality! Think about who you are, your values, your principles, and your goals.
        </Response>    
      </QuestionContainer> 
      
      <QuestionContainer>
        <Question className='recruitment-text'>
          Q. Can I apply if I am an incoming freshman? Are there any major restrictions for applying?            
        </Question>
        <Response className='recruitment-text'>
          We welcome all students, regardless of their year or academic background, as long as they want to explore a future in a data-related field. 
        </Response>          
      </QuestionContainer>
        
      <QuestionContainer>
        <Question className='recruitment-text'>
          Q. I have experience doing data-related projects. Can I skip curriculum and directly join the project teams?
        </Question>
        <Response className='recruitment-text'>
          If you’re interested in skipping the curriculum track, let us know during your interview! We’ll follow up with you to determine whether you’re a good fit for the project teams.
        </Response>          
      </QuestionContainer>        
        
    </div>  

    </div>
  )
}

export default Join