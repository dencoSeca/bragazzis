import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import grinderImg from '../assets/images/bragazzis-grinder.jpg'
import craigImg from '../assets/images/bragazzis-craig-reading.jpg'
import sandwichesMadeImg from '../assets/images/bragazzis-sandwiches-made-2.jpg'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Caffè'} color="#DE4C3C">
        <div className="container">
          <div className="cafe__opening-hours">
            {openingHours.map((data, index) => (
              <div className="cafe__opening-hours-line" key={index}>
                {data}
              </div>
            ))}
          </div>
        </div>
        <div className="cafe__banner">
          <img src={craigImg} alt="" className="cafe__banner-image" />
        </div>
        <div className="container">
          <div className="cafe__ethos">
            <div className="cafe__content-card">
              <h4>Coffee</h4>
              <p>
                We use our own carefully curated blend, roasted by Darkwoods
                Coffee, West Yorkshire. We only use specialty graded coffee
                which has a cleaner and more distinctive flavour than commercial
                coffee, and is traceable back to the skilled farmers than
                produce it, and their farms across the world.
              </p>
            </div>
            <div className="cafe__content-card">
              <h4>People</h4>
              <p>
                Bragazzi’s is nothing without people. You have your regulars,
                and they have their usual orders. We are first and foremost an
                exercise in real-life shopkeeping and we treasure the analogue
                charm of a brick-and-mortar shop. We relish the opportunity to
                serve you in person and talk of espresso or the preparation of a
                sugo.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
