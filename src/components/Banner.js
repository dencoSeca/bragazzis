import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

// Assets
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

function handleMouseEnter() {
  gsap.to('.link a svg', 1, {
    left: 10,
    ease: 'expo.out'
  })
}

function handleMouseLeave() {
  gsap.to('.link a svg', 1, {
    left: 0,
    ease: 'expo.out'
  })
}

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
            <Link
              to="/our-story"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Our story <RightArrow />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
