import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

export default function Header() {
  useEffect(() => {
    gsap.from('.header', 1, {
      opacity: 0,
      ease: 'power3.easeOut',
      delay: 0.5
    })
  }, [])

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">BRAGAZZI'S</Link>
          </div>
          <div className="menu-button">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}
