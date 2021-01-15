import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import cafeImg from '../assets/images/bragazzis-cafe-6.jpg'
import shopImg from '../assets/images/bragazzis-shop-5.jpg'
import seasonalityImg from '../assets/images/bragazzis-seasonality-1.jpg'

// Animations
import ease from '../styles/animations/ease'

// =========================
// Motion component configs
// =========================
const boxesContainerVariants = {
  animate: {
    transition: {
      delayChildren: 1.8,
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const boxVariants = {
  initial: {
    opacity: 0,
    y: 200
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.smooth }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: ease.smooth
    }
  }
}

function Boxes({ openingHours }) {
  return (
    <>
      <motion.div
        className="boxes row no-gutters"
        variants={boxesContainerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="boxes__box col-md-4" variants={boxVariants}>
          <div className="boxes__background-image">
            <motion.img
              src={cafeImg}
              alt="cafe scene"
              initial={{ scale: 1.3 }}
              animate={{
                scale: 1,
                transition: { duration: 0.8, delay: 1.8, ease: ease.smooth }
              }}
              exit={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  delay: 0.3,
                  ease: ease.smooth
                }
              }}
            />
          </div>
          <Link className="boxes__content" to="/cafe">
            <h4 className="boxes__content-heading">Caffè</h4>
            <span className="boxes__content-tagline">
              Panini, caffé & pasticcini.
            </span>
            <div className="boxes__opening-hours-wrapper">
              {openingHours.map((data, index) => (
                <div className="boxes__opening-hours-line" key={index}>
                  {data}
                </div>
              ))}
            </div>
          </Link>
        </motion.div>
        <motion.div className="boxes__box col-md-4" variants={boxVariants}>
          <div className="boxes__background-image">
            <motion.img
              src={shopImg}
              alt="cafe scene"
              initial={{ scale: 1.3 }}
              animate={{
                scale: 1,
                transition: { duration: 0.8, delay: 1.9, ease: ease.smooth }
              }}
              exit={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  delay: 0.4,
                  ease: ease.smooth
                }
              }}
            />
          </div>
          <Link className="boxes__content" to="/shop">
            <h4 className="boxes__content-heading">Il Negozio</h4>
            <span className="boxes__content-tagline">
              Roam freely & find inspiration... or that obscure pasta shape that
              you've been looking for.
            </span>
          </Link>
        </motion.div>
        <motion.div className="boxes__box col-md-4" variants={boxVariants}>
          <div className="boxes__background-image">
            <motion.img
              src={seasonalityImg}
              alt="cafe scene"
              initial={{ scale: 1.3 }}
              animate={{
                scale: 1,
                transition: { duration: 0.8, delay: 2, ease: ease.smooth }
              }}
              exit={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  delay: 0.5,
                  ease: ease.smooth
                }
              }}
            />
          </div>
          <Link className="boxes__content" to="/seasonality">
            <h4 className="boxes__content-heading">Stagionalità</h4>
            <span className="boxes__content-tagline">
              Each season brings a selection of well considered products.
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Boxes
