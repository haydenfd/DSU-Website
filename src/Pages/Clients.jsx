import React from 'react'
import './Clients.css'

const Clients = () => {
  return (
    <div className='clients-container'>
      <div className='working-with-dsu-container'>
        <h1 className='title'>
          Working with DSU
        </h1>
        <div className='working-with-dsu-desc'>
          <p> 
            DSU's client project teams consist of experienced members passionate about data science. With skills in modeling, exploratory data analysis, and more; our data scientists are committed to providing you with the best analysis and insights for your organization possible. 
          </p>
        </div>
      </div>
      <div className='quote-container'>
        <p>You have the <p style={{color: '#89B8EF', display: 'inline'}}>data</p>.</p>
        <p>We have the <p style={{color: '#f3a47d', display: 'inline'}}>insights</p>.</p>
      </div>
      <div className='process-container'>
         <h1 className='title'>
          Process
        </h1>
        <ol>
          <li>
            project team receives data and client's goals
          </li>
          <li>
            project team analyzes and models preliminary data
          </li>          
          <li>
            project team presents initial findings, and the clients give feedback and additional goals and/or data
          </li>
          <li>
            project team continues to refine their analysis and prepares their final thoughts
          </li>
          <li>
            project team presents its final analysis and provides helpful insights to better the clients's services
          </li>          
        </ol>
      </div>
      <div className='get-in-touch-container'>

      </div>
    </div>
  )
}

export default Clients