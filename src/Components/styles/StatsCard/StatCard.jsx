import React from 'react'
import './StatCard.css'

const StatCard = ({number,text1,text2}) => {
  return (
    <div className="stat-card">
      <h3 className='number'>{number}</h3>
      <h3 className='text1'>{text1}</h3>
      <h3 className='text2'>{text2}</h3>
    </div>
  )
}

export default StatCard
