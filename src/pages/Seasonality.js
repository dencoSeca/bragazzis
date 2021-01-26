import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import bowerImage from '../assets/images/bragazzis-christmas-bower.jpg'

function Seasonality() {
  return (
    <>
      <Page title={'Stagionalità'} color="#FFA816">
        <div className="spacer"></div>
        <div className="full-width-banner">
          <img src={bowerImage} alt="" className="full-width-banner__image"/>
        </div>
      </Page>
    </>
  )
}

export default Seasonality
