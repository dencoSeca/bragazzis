import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import produceImage from '../assets/images/bragazzis-produce-1.jpg'

function Shop() {
  return (
    <>
      <Page title={'Il Negozio'} color="#006B9B">
        <div className="full-width-banner">
          <img src={produceImage} alt="" className="full-width-banner__image" />
        </div>
        <div className="content-card">
          <p>
            We trade directly with suppliers in Italy. We choose to work with
            suppliers who focus on the quality, integrity and provenance of
            their produce. Year round we sell a wide range of everyday staple
            foods.
          </p>
        </div>
        <div className="content-card">
          <p>
            We are a small team of people, with different interests and
            experiences, but with a common appreciation for the somewhat
            overlooked, and at times undervalued occupation of shopkeeping, and
            the unrelenting pursuit of making good coffee.
          </p>
        </div>
      </Page>
    </>
  )
}

export default Shop
