import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

export default function Header() {
  useEffect(() => {
    gsap.from('.header', 1, {
      opacity: 0,
      ease: 'power3.easeOut',
      delay: 1.6
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
      <div className="menu">
        <div className="container">
          <div className="inner">
            <div className="site-links">
              <ul>
                <li>
                  <Link to="/our-story">Our Story</Link>
                </li>
                <li>
                  <Link to="/cafe">Cafe</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/Events">Events</Link>
                </li>
              </ul>
            </div>
            <div className="details">
              <div className="card address">
                <h5>Address</h5>
                <span>224-226 Abbeydale Road</span>
                <span>Sheffield</span>
                <span>S7 1FL</span>
                <span>Google Maps Link</span>
              </div>
              <div className="card contact">
                <h5>Get in touch</h5>
                <span>
                  <a href="mailto:info@bragazzis.co.uk">info@bragazzis.co.uk</a>
                </span>
                <span>0114 258 1483</span>
              </div>
              <div className="card social">
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
              <div className="card site-info">
                <span>&copy; Bragazzis Ltd 2020</span>
                <span>Site by LEON BROWN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
