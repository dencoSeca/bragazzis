import React from 'react'

// Components
import Page from '../components/Page'

// Assets
// import grinderImage from '../assets/images/bragazzis-grinder.jpg'
import cloudImage from '../assets/images/bragazzis-clouds.jpg'
import sandwichesImage from '../assets/images/bragazzis-sandwiches-open.jpg'
// import cafeImage from '../assets/images/bragazzis-cafe-view-3.jpg'

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
          <div className="row">
          </div>
          <div className="content-card">
            <h4>Coffee</h4>
            <p>
              We use our own carefully curated blend, roasted by{' '}
              <a
                className="cafe__link"
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
          <div className="content-card">
            <h4>People</h4>
            <p>
              Bragazzi’s is nothing without people. You have your regulars, and
              they have their usual orders. We are first and foremost an
              exercise in real-life shopkeeping and we treasure the analogue
              charm of a brick-and-mortar shop. We relish the opportunity to
              serve you in person and talk of espresso or the preparation of a
              sugo.
            </p>
          </div>
        </div>
        <div className="full-width-banner">
          <img
            src={sandwichesImage}
            alt=""
            className="full-width-banner__image"
          />
        </div>
        <div className="container">
          <div className="content-card">
            <h4>Covid Policy</h4>
            <p>
              We want to reassure you that we are putting all measures in place
              to keep you and our team safe so that you can confidently enjoy
              your visit.
            </p>

            <p>
              We are following all government guidelines and working on practice
              measures within the shop. We have completed necessary risk
              assessments and all procedures which will be constantly reviewed
              and updated where necessary in line with government guidelines.
            </p>

            <p>
              We ask you to please use common sense to play your part keeping
              everyone safe. In return we will be doing the same for you.
            </p>

            <p>
              Due to the constantly changing nature of this guidance, we will be
              continuously reviewing our procedures related to capacity.
            </p>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
