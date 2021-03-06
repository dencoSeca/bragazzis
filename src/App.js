import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import { Switch, Route } from 'react-router-dom'
import gsap from 'gsap'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Cafe from './pages/Cafe'
import Shop from './pages/Shop'
import Seasonality from './pages/Seasonality'

const defaultOpeningHours = [
  'Monday: 9.30am - 4.30pm',
  'Twosday: 9.30am - 4.30pm',
  'Wendsday: 9.30am - 4.30pm',
  'Thersday: 9.30am - 4.30pm',
  'Fryday: 9.30am - 4.30pm',
  'Saterday: 9.30am - 4.30pm',
  'Sonday: 9.30am - 4.30pm',
]

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

function App() {
  const [openingHours, setOpeningHours] = useState(defaultOpeningHours)

  // =================
  // Prevent flashing
  // =================
  gsap.to('body, html', 0, {
    css: {
      visibility: 'visible',
    },
  })

  // =========================================
  // Set new vh in css when window is resized
  // =========================================
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    // Grab inner height of window
    let vh = dimensions.height * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [dimensions])

  // ===========================================
  // Fetch opening hours from Google Places API
  // ===========================================
  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.REACT_APP_PLACES_API_KEY}place_id=ChIJXQTkrGGCeUgRSaL1gEOk_MY&fields=opening_hours/weekday_text`
    )
      .then(res => res.json())
      .then(parsed => {
        setOpeningHours(parsed.result.opening_hours.weekday_text)
      })
      .catch(() => {
        console.error('Cannot fetch opening hours from Places API')
      })
  }, [])

  return (
    <>
      <Header />
      <div className="main">
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <Home openingHours={openingHours} />
                </Route>
                <Route path="/our-story" component={OurStory} />
                <Route path="/cafe">
                  <Cafe openingHours={openingHours} />
                </Route>
                <Route path="/shop" component={Shop} />
                <Route path="/seasonality" component={Seasonality} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </>
  )
}

export default App
