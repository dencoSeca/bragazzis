import React from 'react'
import { motion } from 'framer-motion'

// Animations
import ease from '../styles/animations/ease'

function Page({ title, children }) {
  return (
    <>
      <div className="page">
        <div className="container">
          <motion.div
            className="title"
            initial={{ opacity: 0, y: 48 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -48
            }}
            transition={{ duration: 0.4, delay: 0.1, ease: ease.smooth }}
          >
            {title.map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </motion.div>
          <motion.div
            className="content"
            initial={{ opacity: 0, y: 48 }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -48
            }}
            transition={{ duration: 0.4, delay: 0.2, ease: ease.smooth }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Page
