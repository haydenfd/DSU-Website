import React from 'react'
import './GenCard.css'

const GenCard = ({name,year,img}) => {
  return (
    <div className="gen-container">
      <img src={img} alt="" className="gen-member-img" />
      <p className="gen-member-name">{name}</p>
      <p className='gen-member-year'>Class of '{year}</p>
    </div>
  )
}

export default GenCard