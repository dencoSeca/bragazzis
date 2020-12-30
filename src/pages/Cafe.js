import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Cafe'}>
        <div className="cafe-screen__background-image">
          <div className="cafe-screen__background-image__tint"></div>
          <div className="cafe-screen__opening-hours-wrapper col-md-6">
            <div className="cafe-screen__opening-hours-inner">
              <h2>Opening Hours</h2>
              {openingHours.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
