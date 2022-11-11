import styled from 'styled-components'

const Title = styled.h1`
  color: #F3A47D;
  font-size: 2.5rem;
  font-weight:800;
  margin: 2.5vw 0 2vw 0;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Description = styled.p`
    font-size:1.25em;
    text-align: center;
`
const FAQ = [
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
]

export {
  Title,
  TitleWrapper,
  Description,
  FAQ,
}