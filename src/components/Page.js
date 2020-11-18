import React from 'react'
import { motion } from 'framer-motion'

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
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <h1>{title}</h1>
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
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Page
