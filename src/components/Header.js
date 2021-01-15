import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Link, withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

// Animations
import ease from '../styles/animations/ease'

// =========================
// Motion component configs
// =========================
const headerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.5,
      ease: ease.smooth
    }
  }
}

function Header({ history }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isBtnDisabled, setIsBtnDisabled] = useState(false)

  // ============================
  // Menu open / close animation
  // ============================
  useEffect(() => {
    history.listen(() => {
      setMenuIsOpen(false)
    })
    setIsBtnDisabled(true)
    if (menuIsOpen) {
      gsap.to('.header', 0, {
        backgroundColor: 'transparent'
      })
      gsap.to('body', 0, {
        css: {
          overflow: 'hidden'
        }
      })
      gsap.to('.main', 0.8, {
        y: window.innerWidth < 760 ? '580px' : '550px',
        ease: 'expo.out'
      })
      gsap.to('.header__logo a', 0.1, {
        color: '#fff',
        ease: 'expo.out'
      })
      gsap.to('.header__btn span', 0.1, {
        backgroundColor: '#fff',
        ease: 'expo.out'
      })
      gsap.to('.header__btn-top-span', 0.8, {
        marginBottom: 0,
        ease: 'expo.out'
      })
      gsap.to('.header__btn-bottom-span', 0.8, {
        marginTop: 0,
        ease: 'expo.out'
      })
    } else if (!menuIsOpen) {
      gsap.to('body', 0, {
        css: {
          overflow: 'auto'
        }
      })
      gsap.to('.main', 0.8, {
        y: 0,
        ease: 'expo.out'
      })
      gsap.to('.header__logo a', 0, {
        color: '#000',
        delay: 0.24
      })
      gsap.to('.header__btn span', 0, {
        backgroundColor: '#000',
        delay: 0.24
      })
      gsap.to('.header__btn-top-span', 0.8, {
        marginBottom:
          window.innerWidth < 760 ? 2 : window.innerWidth < 992 ? 3 : 5,
        ease: 'expo.out'
      })
      gsap.to('.header__btn-bottom-span', 0.8, {
        marginTop:
          window.innerWidth < 760 ? 2 : window.innerWidth < 992 ? 3 : 5,
        ease: 'expo.out'
      })
      gsap.to('.header', 0.24, {
        backgroundColor: '#fff',
        delay: 0.42,
        ease: ease.smooth
      })
    }
    setIsBtnDisabled(false)
  }, [history, menuIsOpen])

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <motion.div
        className="header"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="header__inner container">
          <div className="header__logo">
            <Link to="/">BRAGAZZI'S</Link>
          </div>
          <button
            className="header__btn"
            onClick={handleMenuClick}
            disabled={isBtnDisabled}
          >
            <span className="header__btn-top-span"></span>
            <span className="header__btn-bottom-span"></span>
          </button>
        </div>
      </motion.div>
      <div className="menu">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ul className="menu__links">
                <li>
                  <Link to="/our-story">La Storia</Link>
                </li>
                <li>
                  <Link to="/cafe">Caffè</Link>
                </li>
                <li>
                  <Link to="/shop">Il Negozio</Link>
                </li>
                <li>
                  <Link to="/seasonality">Stagionalità</Link>
                </li>
              </ul>
            </div>
            <div className="menu__details col-md-7">
              <div className="menu__details-card address">
                <h5>Address</h5>
                <span>224-228 Abbeydale Road</span>
                <span>Sheffield</span>
                <span>S7 1FL</span>
                <span>[google maps link]</span>
              </div>
              <div className="menu__details-card contact">
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
              <div className="menu__details-card social">
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
              <div className="menu__details-card site-info">
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
