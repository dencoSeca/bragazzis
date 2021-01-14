import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import sandwichesImg from '../assets/images/bragazzis-cafe-7.jpg'
import carImg from '../assets/images/bragazzis-cafe-1.jpg'
import craigImg from '../assets/images/bragazzis-cafe-10.jpg'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Caffè'}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="cafe__opening-hours-wrapper">
              {openingHours.map((data, index) => (
                <div className="cafe__opening-hours-line" key={index}>
                  {data}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="cafe__banner-img"
              src={carImg}
              alt="old italian wooden toy car in cafe window"
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img src={craigImg} alt="shelves full of italian dry goods... and craig" className="cafe__banner-img"/>
          </div>
          <div className="col-md-6"></div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
