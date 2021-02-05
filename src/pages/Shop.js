import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import produceImage from '../assets/images/bragazzis-coffee-pour.jpg'
import counterImage from '../assets/images/bragazzis-coffee-pour.jpg'

function Shop() {
  return (
    <>
      <Page title={'Il Negozio'} color="#007DB8">
        <div className="spacer"></div>
        <div className="full-width-banner">
          <img src={produceImage} alt="" className="full-width-banner__image" />
        </div>
        <div className="container">
          <div className="content-card">
            <h4>Authenticity</h4>
            <p>
              We trade directly with suppliers in Italy. We choose to work with
              suppliers who focus on the quality, integrity and provenance of
              their produce. Year round we sell a wide range of everyday staple
              foods.
            </p>
            <p>
              We maintain a good supply of everyday items such as flour, dried
              pasta shapes, chocolates, and sauces, and our deli counter is
              always well stocked with DOP cheeses and cured meats. You’ll find
              fresh Italian eggs for making the most beautiful fresh pasta, and
              fresh Italian sausage to stir through it.
            </p>
          </div>
        </div>
        <div className="full-width-banner">
          <img src={counterImage} alt="" className="full-width-banner__image" />
        </div>
        <div className="container">
          <div className="content-card">
            <h4>Open All Hours</h4>
            <p>
              We are a small team of people, with different interests and
              experiences, but with a common appreciation for the somewhat
              overlooked, and at times undervalued occupation of shopkeeping,
              and the unrelenting pursuit of making good coffee.
            </p>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Shop
