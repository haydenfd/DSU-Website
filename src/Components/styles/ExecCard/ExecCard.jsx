import React from 'react'
import './ExecCard.css'

const ExecCard = ({name,position,img}) => {
  return (
    <div className="exec-container">
      <img src={img} alt="" className="exec-member-img" />
      <p className="exec-member-name">{name}</p>
      <p className='exec-member-position'>{position}</p>
    </div>
  )
}

export default ExecCard