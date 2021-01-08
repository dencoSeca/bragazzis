import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import cafeImg from '../assets/images/cafe-03.jpg'
import shopImg from '../assets/images/shop-05.jpg'
import openingHoursImg from '../assets/images/cafe-06.jpg'

// Animations
import ease from '../styles/animations/ease'

const boxesContainerVariants = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    duration: 0,
    transition: {
      delayChildren: 1.8,
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 1
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
      delay: 0.3,
      ease: ease.smooth
    }
  }
}

export default function Boxes({ openingHours }) {
  return (
    <>
      <motion.div
        className="boxes row no-gutters"
        variants={boxesContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="boxes__box col-xl-4" variants={boxVariants}>
          <div className="boxes__background-image">
            <motion.img
              src={openingHoursImg}
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
          <div className="boxes__content">
            <h4 className="boxes__content-heading">Opening Hours</h4>
            <div className="boxes__opening-hours-wrapper">
              {openingHours.map((data, index) => (
                <p className="boxes__opening-hours-line" key={index}>
                  {data}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div className="boxes__box col-xl-4" variants={boxVariants}>
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
            <h4 className="boxes__content-heading">Shop</h4>
            <span className="boxes__content-tagline">
              Roam freely & find inspiration... or that obscure pasta shape that
              you've been looking for.
            </span>
          </Link>
        </motion.div>
        <motion.div className="boxes__box col-xl-4" variants={boxVariants}>
          <div className="boxes__background-image">
            <motion.img
              src={cafeImg}
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
          <Link className="boxes__content" to="/cafe">
            <h4 className="boxes__content-heading">Cafe</h4>
            <span className="boxes__content-tagline">
              Sandwich, caffé & pasticcini.
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </>
  )
}
