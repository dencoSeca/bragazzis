import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

// Animations
import ease from '../styles/animations/ease'

// =========================
// Motion component configs
// =========================
const lineOneVariants = {
  initial: {
    y: 48,
    skewY: 4,
    opacity: 0
  },
  animate: {
    y: 0,
    skewY: 0,
    opacity: 1,
    transition: { delay: 0.3, ease: ease.smooth, duration: 0.7 }
  },
  exit: { y: -10, opacity: 0, transition: { ease: ease.smooth, duration: 0.5 } }
}

const lineTwoVariants = {
  initial: {
    y: 64,
    skewY: 4,
    opacity: 0
  },
  animate: {
    y: 0,
    skewY: 0,
    opacity: 1,
    transition: { delay: 0.5, ease: ease.smooth, duration: 0.7 }
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: { delay: 0.1, ease: ease.smooth, duration: 0.5 }
  }
}

const linkVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.5, ease: ease.smooth }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: ease.smooth }
  }
}

function Banner() {
  return (
    <>
      <div className="banner container">
        <div className="banner__heading-wrapper">
          <h1 className="banner__heading">
            <div className="banner__heading-line">
              <motion.span
                variants={lineOneVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Purveyors of quality
              </motion.span>
            </div>
            <div className="banner__heading-line">
              <motion.span
                variants={lineTwoVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Italian goods.
              </motion.span>
            </div>
          </h1>
          <motion.div
            className="banner__link"
            variants={linkVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Link to="/our-story">
              La Storia <RightArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Banner
