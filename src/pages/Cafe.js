import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Cafe'}>
        <div className="cafe-screen__background-image">
          <div className="cafe-screen__background-image__tint"></div>
          
        </div>
      </Page>
    </>
  )
}

export default Cafe
