import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Link, withRouter } from 'react-router-dom'

const ease = 'expo.out'

function Header({ history }) {
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
    history.listen(() => {
      setMenuIsOpen(false)
    })

    if (menuIsOpen) {
      gsap.to('body', 0, {
        css: {
          overflow: 'hidden'
        }
      })
      gsap.to('.main', 0.8, {
        y: window.innerWidth < 760 ? '580px' : '550px',
        ease: ease
      })
      gsap.to('.logo a', 0.1, {
        color: '#fff',
        ease: ease
      })
      gsap.to('.menu-button span', 0.1, {
        backgroundColor: '#fff',
        ease: ease
      })
      gsap.to('.menu-span-top', 0.8, {
        marginBottom: 0,
        ease
      })
      gsap.to('.menu-span-bottom', 0.8, {
        marginTop: 0,
        ease
      })
    } else if (!menuIsOpen) {
      gsap.to('body', 0, {
        css: {
          overflow: 'auto'
        }
      })
      gsap.to('.main', 0.8, {
        y: 0,
        ease: ease
      })
      gsap.to('.logo a', 0, {
        color: '#000',
        delay: 0.24
      })
      gsap.to('.menu-button span', 0, {
        backgroundColor: '#000',
        delay: 0.24
      })
      gsap.to('.menu-span-top', 0.8, {
        marginBottom: window.innerWidth < 760 ? 2 : window.innerWidth < 992 ? 3 : 5,
        ease
      })
      gsap.to('.menu-span-bottom', 0.8, {
        marginTop: window.innerWidth < 760 ? 2 : window.innerWidth < 992 ? 3 : 5,
        ease
      })
    }
  }, [history, menuIsOpen])

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
            <span className="menu-span-top"></span>
            <span className="menu-span-bottom"></span>
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
                  <a
                    href="mailto:info@bragazzis.co.uk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    info@bragazzis.co.uk
                  </a>
                </span>
                <span>
                  <a href="tel:+441142581483">0114 258 1483</a>
                </span>
              </div>
              <div className="card social">
                <h5>Social</h5>
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-tripadvisor"></i>
                </a>
              </div>
              <div className="card site-info">
                <h5>Site</h5>
                <span>&copy; Bragazzis Ltd 2020</span>
                <span>
                  <a href="https://www.leonbrown.dev">Site by LEON BROWN</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
