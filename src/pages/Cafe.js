import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={['C', 'a', 'f', 'e']}>
        <div className="cafe">
          <div className="opening-hours">
            <h2>Opening Hours</h2>
            {openingHours.map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
