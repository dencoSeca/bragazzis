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
        <div className="container">
          <div className="row">
            <div className="col-md-4"><div className="cafe__opening-hours-wrapper">
            {openingHours.map((data, index) => (
              <div className="cafe__opening-hours-line" key={index}>
                {data}
              </div>
            ))}
          </div></div>
            <div className="col-md-8">
              
            </div>
          </div>
          
        </div>
      </Page>
    </>
  )
}

export default Cafe
