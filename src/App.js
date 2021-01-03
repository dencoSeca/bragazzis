import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import { Switch, Route } from 'react-router-dom'
import gsap from 'gsap'
import axios from 'axios'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Cafe from './pages/Cafe'
import Shop from './pages/Shop'
import Events from './pages/Events'

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

export default function App() {
  const [openingHours, setOpeningHours] = useState(['Updating opening hours...'])

  // Prevents flashing
  gsap.to('body', 0, {
    css: {
      visibility: 'visible'
    }
  })

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    // Grab inner height of window for mobile reasons when dealing with vh
    let vh = dimensions.height * 0.01
    // Set css variable vh
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [dimensions])

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBMnHkqSbbWDI8oipDnotNtzf7AltbSquM&place_id=ChIJXQTkrGGCeUgRSaL1gEOk_MY&fields=opening_hours/weekday_text'
      )
      .then(response => {
        setOpeningHours(response.data.result.opening_hours.weekday_text)
      })
      .catch(() => setOpeningHours(['Error loading opening hours']))
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
                <Route path="/cafe" component={Cafe} />
                <Route path="/shop" component={Shop} />
                <Route path="/events" component={Events} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </>
  )
}
