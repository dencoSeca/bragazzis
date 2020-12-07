import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Cafe'}>
        <div className="cafe">
          <div className="background-image">
            <div className="opening-hours-wrapper col-md-6">
              <div className="opening-hours-inner">
                <h2>Opening Hours</h2>
                {openingHours.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
