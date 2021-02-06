import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import cloudImage from '../assets/images/bragazzis-clouds.jpg'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Caffè'} color="#DE4C3C">
        <div className="cafe__opening-hours">
          {openingHours.map((data, index) => (
            <span className="cafe__opening-hours-line" key={index}>
              {data}
            </span>
          ))}
        </div>
        <div className="full-width-banner">
          <img src={cloudImage} alt="" className="full-width-banner__image" />
        </div>
        <div className="container">
          <div className="excerpt">
            <p>
              We use our own carefully curated blend, roasted by <br />
              <a
                className="colored-link"
                href="https://darkwoodscoffee.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                Darkwoods Coffee, West Yorkshire
              </a>
              . We only use specialty graded coffee which has a cleaner and more
              distinctive flavour than commercial coffee, and is traceable back
              to the skilled farmers that produce it, and their farms across the
              world.
            </p>
          </div>
        </div>
        <div className="full-width-banner">
          <img src={cloudImage} alt="" className="full-width-banner__image" />
        </div>
      </Page>
    </>
  )
}

export default Cafe
