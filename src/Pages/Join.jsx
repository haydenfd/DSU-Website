import React from 'react'
import './Join.css'
import {
  Title,
  Description,
  FAQ,
} from './styles/JoinStyles'
import Accordion from '../Components/Accordion'

const Join = () => { 
  return (
    <>
        <div className="recruitment-wrapper">
        <Title>Recruitment</Title>
        <Description>Our recruitment cycle has concluded, but we will be back in Spring 2023! If you are a prospective applicant, stay tuned for more updates!</Description>
        </div>
        <div className="faq-wrapper">
        <Title>Frequently Asked Questions</Title>
        {FAQ.map((faq, i) => (
          <Accordion
            question={faq.question}
            answer={faq.answer}
          />
        ))}       
        </div>
    </>
  //   <div className="join-us-container">
  //     <h1 className="join-title">
  //       Recruitment
  //     </h1>
  //     <p className="join-text">
  //       Our Fall 2022 Recruitment cycle has concluded, but we will be back in Spring 2022! If you are a prospective applicant, stay tuned for more updates!</p>
  //      {/* <div className='links'>
  //           <a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer' className="logo-hover">Application</a>
  //           <a href='https://tinyurl.com/dsu-inperson-rsvp' target='_blank' rel='noreferrer' className="logo-hover">In-person Info Session</a> 
  //           <a href='https://tinyurl.com/dsu-virtual-rsvp' target='_blank' rel='noreferrer' className="logo-hover">Virtual Info Session</a>            
  //           <a href='https://tinyurl.com/dsu-joint-rsvp' target='_blank' rel='noreferrer' className="logo-hover">Joint Info Session</a>                       
  //     </div>
  //     <img src={timeline} alt='' style={ { width: '30vw', margin: '7vw 0'}} /> 
  //     <div className='recruitment-timeline'>
  //     <table className='recruitment-table'>
  //       <tr>
  //         <th>Event</th>
  //         <th>Time</th>
  //         <th>Location</th>
  //       </tr>
  //       <tr>
  //         <td>Application opens</td>
  //         <td>9/20 @ 8 AM</td>
  //         <td><a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer'>Apply here!</a></td>
  //       </tr>
  //       <tr>
  //         <td>Virtual Info Session</td>
  //         <td>9/27 @ 7 PM</td>
  //           <td>
  //             <a href='https://tinyurl.com/dsu-virtual-rsvp' target='_blank' rel='noreferrer'>
  //             RSVP here!
  //             </a>
  //           </td>
  //       </tr>
  //       <tr>
  //         <td>In-person Info Session</td>
  //         <td>9/28 @ 7 PM</td>
  //           <td>
  //             <a href='https://tinyurl.com/dsu-inperson-rsvp' target='_blank' rel='noreferrer'>
  //             RSVP here!
  //             </a>              
  //           </td>
  //         </tr>
  //       <tr>
  //         <td>Application closes</td>
  //         <td>9/29 @ 12 PM</td>
  //           <td>
  //             <a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer'>Apply here!</a>     
  //           </td>
  //         </tr>
  //         <tr>
  //         <td>Coffee Chats</td>
  //         <td>25</td>
  //           <td>
  //             Invite only
  //           </td>
  //         </tr>
  //         <tr>
  //         <td>Interviews</td>
  //         <td>25</td>
  //           <td>
  //             Invite only       
  //           </td>
  //       </tr>  
          
  //     </table>
  //     </div>*/}
  //     <section className="faq-container">
  //     <h1 className="join-title">
  //       FAQs
  //       </h1>
          // {faqs.map((item, i) => (
          //   <Accordion
          //     question={item.question}
          //     answer={item.answer}
          //   />
  //         ))}
  //     </section>
  //   </div>
  )

}


export default Join;