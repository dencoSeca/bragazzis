import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const ease = 'expo.out'
const duration = 0.8

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  // Load Animation
  useEffect(() => {
    gsap.from('.header', 1, {
      opacity: 0,
      ease: ease,
      delay: 1.6
    })
  }, [])

  useEffect(() => {
    if (menuIsOpen) {
      gsap.to('body', 0, {
        css: {
          overflow: 'hidden'
        }
      })
      gsap.to('.main', duration, {
        y: '50vh',
        ease: ease
      })
    } else if (!menuIsOpen) {
      gsap.to('body', 0, {
        css: {
          overflow: 'auto'
        }
      })
      gsap.to('.main', duration, {
        y: '0vh',
        ease: ease
      })
    }
  }, [menuIsOpen])

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">BRAGAZZI'S</Link>
          </div>
          <button className="menu-button" onClick={handleMenuClick}>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="site-links col-md-5">
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
                  <Link to="/events">Events</Link>
                </li>
              </ul>
            </div>
            <div className="details col-md-7">
              <div className="card address">
                <h5>Address</h5>
                <span>224-226 Abbeydale Road</span>
                <span>Sheffield</span>
                <span>S7 1FL</span>
                <span>[google maps link]</span>
              </div>
              <div className="card contact">
                <h5>Get in touch</h5>
                <span>
                  <a href="mailto:info@bragazzis.co.uk">info@bragazzis.co.uk</a>
                </span>
                <span>0114 258 1483</span>
              </div>
              <div className="card social">
                <h5>Social</h5>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>Twitter</span>
              </div>
              <div className="card site-info">
                <h5>Site</h5>
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
