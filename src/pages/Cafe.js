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
          <div className="row cafe__row">
            <div className="col-md-5">
              <div className="cafe__opening-hours-wrapper">
                {openingHours.map((data, index) => (
                  <div className="cafe__opening-hours-line" key={index}>
                    {data}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-7">
              <img
                src={craigImg}
                alt="Customer reading by shelves of italian produce in bragazzis"
                className="cafe__image"
              />
            </div>
          </div>
          <div className="row cafe__row">
            <div className="col-md-5">
              <p className="cafe__text">
                We use our own carefully curated blend, roasted by Darkwoods
                Coffee, West Yorkshire. We only use specialty graded coffee
                which has a cleaner and more distinctive flavour than commercial
                coffee, and is traceable back to the skilled farmers than
                produce it, and their farms across the world.
              </p>
            </div>
            <div className="col-md-7">
              <img
                src={grinderImg}
                alt="bragazzi's well used coffee grinder"
                className="cafe__image"
              />
            </div>
          </div>
          <div className="row cafe__row">
            <div className="col-md-5">
              <p className="cafe__text">
                Bragazzi’s is nothing without people. You have your regulars,
                and they have their usual orders. We are first and foremost an
                exercise in real-life shopkeeping and we treasure the analogue
                charm of a brick-and-mortar shop. We relish the opportunity to
                serve you in person and talk of espresso or the preparation of a
                sugo.
              </p>
            </div>
            <div className="col-md-7">
              <img
                src={sandwichesMadeImg}
                alt="freshly made bragazzis italian sandwiches"
                className="cafe__image"
              />
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
