import React from 'react'
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
            <a href="/">
              Our story <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
