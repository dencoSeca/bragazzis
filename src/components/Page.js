import React from 'react'
import { motion } from 'framer-motion'

// Animations
import ease from '../styles/animations/ease'

function Page({ title, children }) {
  return (
    <>
      <div className="page">
        <motion.h1
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
          {title}
        </motion.h1>
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
    </>
  )
}

export default Page
