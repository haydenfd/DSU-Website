import React from 'react'
import './Join.css'
import Accordion from '../Components/Accordion';
const faqs = [
  {
    question: "What does DSU look for in their applicants?",
    answer:
      "For prospective members, we are looking for students who are passionate about developing their technical skills alongside like-minded peers and want to answer questions about our world through an evidence-based, data-driven method.",
  },
  {
    question: "What skills is DSU expecting? Do I need to take certain classes to be prepared?",
    answer:
      "We recommend that prospective members have some experience with data analysis or statistical programming. However, we don't expect you to know everything because we will train you in preparation for data projects!",
  },
  {
    question: "How can I prepare for interviews?",
    answer:
      "Be yourself, and please bring your personality! Think about who you are, your values, your principles, and your goals.",
  },
  {
    question:"Can I apply if I am an incoming freshman? Are there any major restrictions for applying?",
    answer:"No! We welcome people in difference years and from different backgrounds as long as they want to pursue a future in a data-related field.",
  },
  {
    question:"I have some experience doing data-related projects. Can I skip the curriculum track and directly join the project teams?",
    answer:"If you’re interested in skipping the curriculum, let us know during your interview! We’ll follow up with you to determine whether you’re a good fit for the project teams.",
  }
];

const Join = () => { 
  return (
    <div className="join-us-container">
      <h1 className="join-title">
        Recruitment
      </h1>
      <p className="join-text">
        Our Fall 2022 Recruitment cycle has concluded, but we will be back in Spring 2022! If you are a prospective applicant, stay tuned for more updates!</p>
       {/* <div className='links'>
            <a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer' className="logo-hover">Application</a>
            <a href='https://tinyurl.com/dsu-inperson-rsvp' target='_blank' rel='noreferrer' className="logo-hover">In-person Info Session</a> 
            <a href='https://tinyurl.com/dsu-virtual-rsvp' target='_blank' rel='noreferrer' className="logo-hover">Virtual Info Session</a>            
            <a href='https://tinyurl.com/dsu-joint-rsvp' target='_blank' rel='noreferrer' className="logo-hover">Joint Info Session</a>                       
      </div>
      <img src={timeline} alt='' style={ { width: '30vw', margin: '7vw 0'}} /> 
      <div className='recruitment-timeline'>
      <table className='recruitment-table'>
        <tr>
          <th>Event</th>
          <th>Time</th>
          <th>Location</th>
        </tr>
        <tr>
          <td>Application opens</td>
          <td>9/20 @ 8 AM</td>
          <td><a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer'>Apply here!</a></td>
        </tr>
        <tr>
          <td>Virtual Info Session</td>
          <td>9/27 @ 7 PM</td>
            <td>
              <a href='https://tinyurl.com/dsu-virtual-rsvp' target='_blank' rel='noreferrer'>
              RSVP here!
              </a>
            </td>
        </tr>
        <tr>
          <td>In-person Info Session</td>
          <td>9/28 @ 7 PM</td>
            <td>
              <a href='https://tinyurl.com/dsu-inperson-rsvp' target='_blank' rel='noreferrer'>
              RSVP here!
              </a>              
            </td>
          </tr>
        <tr>
          <td>Application closes</td>
          <td>9/29 @ 12 PM</td>
            <td>
              <a href='https://tinyurl.com/dsu-application-f22' target='_blank' rel='noreferrer'>Apply here!</a>     
            </td>
          </tr>
          <tr>
          <td>Coffee Chats</td>
          <td>25</td>
            <td>
              Invite only
            </td>
          </tr>
          <tr>
          <td>Interviews</td>
          <td>25</td>
            <td>
              Invite only       
            </td>
        </tr>  
          
      </table>
      </div>*/}
      <section className="faq-container">
      <h1 className="join-title">
        FAQs
        </h1>
          {faqs.map((item, i) => (
            <Accordion
              question={item.question}
              answer={item.answer}
            />
          ))}
      </section>
    </div>
  )

}


export default Join;