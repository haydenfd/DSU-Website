import React from 'react'
import './Clients.css'

const ForClients = () => {
  return (
    <div className="clients-container">
      <div className="working-with-us-container">
        <h2 className="section-title working-with-us-h2">Working With DSU</h2>
        <div className="working-with-us-text">
          DSU's client project teams consist of experienced members passionate about data science. With skills in modeling, exploratory data analysis, and more; our data scientists are committed to providing you with the best analysis and insights for your organization possible.           
        </div>
      </div>

      {/* might have to flex-wrap here */}
      <div className="taglines-container">  
          <h3 className="tagline">You have the <h3 className="data-tag">data</h3>.</h3>
          <h3 className="tagline">We have the <h3 className="insights-tag">insights</h3>.</h3>
      </div>

      <div className="project-process-container">
        <h2 className="section-title">Our Process</h2>

        <div className="list-container">

          <div className="list-kid">
            {/* <img src={List1} alt='' className='list-img'/> */}
            <p className="list-text">
              1. The project team receives data and client's goals.
            </p>
          </div>
          <div className="list-kid">
            <p className="list-text">
            2. The project team analyzes and models preliminary data.
            </p>
          </div>
          <div className="list-kid">
            <p className="list-text">
              3. The project team presents initial findings, and the clients give feedback and additional goals and/or data.
            </p>
          </div>
          <div className="list-kid">
            <p className="list-text">
              4. The project team continues to refine their analysis and prepares their final thoughts.
            </p>
          </div>
          <div className="list-kid">
            <p className="list-text">
              5. The project team presents its final analysis and provides helpful insights to better the clients's services.
            </p>
          </div>
        
        </div>

      </div>

      
      {/* <div className="testimonials-container">
        <h2 className="section-title">
          Testimonials
        </h2>
        <p>Here's what past clients have said.</p>
      </div> */}

      {/* <div className="clients-list-container">
        <h2 className="section-title">
          Previous Clients
        </h2>
        <p>Some companies we have worked with!</p>
      </div> */}

    </div>
  )
}

export default ForClients