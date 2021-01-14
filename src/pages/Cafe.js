import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import sandwichesImg from '../assets/images/bragazzis-cafe-7.jpg'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Caffè'}>
        <div className="container">
          <div className="cafe-ethos">
            <p>
              We use our own carefully curated blend roasted by coffee, West
              Yorkshire. We only use specialty graded which has a cleaner and
              more distinctive flavour than commercial coffee, and is traceable
              back to the skilled that produce it.
            </p>
            <p>
              Bragazzi’s is nothing without people. You have your regulars, and
              they have their usual orders. We are first and foremost an
              exercise in real-life shopkeeping and we treasure the analogue
              charm of a brick-and-mortar shop.
            </p>
            <p>
              We relish the opportunity to serve you in person and talk of
              espresso or the preparation of a sugo.
            </p>
            <p>
              We are a small team of people, with different interests and
              experiences, but with a common appreciation for the somewhat
              overlooked and at times undervalued occupation of shopkeeping and
              the unrelenting pursuit of making good coffee.
            </p>
          </div>
        </div>
        <div className="banner__wrapper">
          <img
            src={sandwichesImg}
            alt="open sandwiches full of roast italian vegetables"
            className="banner__img"
          />
        </div>
      </Page>
    </>
  )
}

export default Cafe
