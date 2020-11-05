import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <h2>
            <div className="line">
              <span>Purveyors of quality</span>
            </div>
            <div className="line">
              <span>Italian goods.</span>
            </div>
          </h2>
          <div className="link">
            <Link to="/">
              Our story <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
