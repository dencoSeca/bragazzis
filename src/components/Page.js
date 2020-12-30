import React from 'react'
import { motion } from 'framer-motion'

// Animations
import ease from '../styles/animations/ease'

const titleVariants = {
  initial: {
    opacity: 0,
    y: 48
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: ease.smooth
    }
  },
  exit: {
    opacity: 0,
    y: -48,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: ease.smooth
    }
  }
}

const contentVariants = {
  initial: {
    opacity: 0,
    y: 48
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: ease.smooth
    }
  },
  exit: {
    opacity: 0,
    y: -48,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: ease.smooth
    }
  },
  transition: {
    duration: 0.4,
    delay: 0.2,
    ease: ease.smooth
  }
}

function Page({ title, children }) {
  return (
    <>
      <div className="page">
        <motion.h1
          className="page__title"
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {title}
        </motion.h1>
        <motion.div
          className="page__content"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </div>
    </>
  )
}

export default Page
