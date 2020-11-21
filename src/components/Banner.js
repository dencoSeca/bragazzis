import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { motion } from 'framer-motion'

// Assets
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

// Animations
import ease from '../styles/animations/ease'

function handleMouseEnter() {
  gsap.to('.link a svg', 1, {
    left: 10,
    ease: 'expo.out'
  })
}

function handleMouseLeave() {
  gsap.to('.link a svg', 1, {
    left: 0,
    ease: 'expo.out'
  })
}

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container">
          <h2>
            <div className="line">
              <motion.span
                initial={{ y: 48, skewY: 4, opacity: 0 }}
                animate={{
                  y: 0,
                  skewY: 0,
                  opacity: 1,
                  transition: { delay: 0.3, ease: ease.smooth, duration: 0.7 }
                }}
                exit={{
                  opacity: 0,
                  transition: { ease: ease.smooth, duration: 0.5 }
                }}
              >
                Purveyors of quality
              </motion.span>
            </div>
            <div className="line">
              <motion.span
                initial={{ y: 64, skewY: 4, opacity: 0 }}
                animate={{
                  y: 0,
                  skewY: 0,
                  opacity: 1,
                  transition: { delay: 0.5, ease: ease.smooth, duration: 0.7 }
                }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.1, ease: ease.smooth, duration: 0.5 }
                }}
              >
                Italian goods.
              </motion.span>
            </div>
          </h2>
          <motion.div
            className="link"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 1.5, ease: ease.smooth }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: ease.smooth }
            }}
          >
            <Link
              to="/our-story"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Our story <RightArrow />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}
