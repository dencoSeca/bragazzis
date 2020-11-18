import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Assets
import cafeImg from '../assets/images/cafe-full.jpg'
import shopImg from '../assets/images/shop.jpg'
import eventsImg from '../assets/images/sandwiches.jpg'

const boxes = [
  {
    id: 1,
    name: 'Cafe',
    tagline: 'Grab a sandwich, coffee and a sweet treat.',
    image: cafeImg,
    path: '/cafe',
    delay: 1.8
  },
  {
    id: 2,
    name: 'Shop',
    tagline:
      'Seek inspiration from our packed shelves full of fresh food and pantry fillers.',
    image: shopImg,
    path: '/shop',
    delay: 2
  },
  {
    id: 3,
    name: 'Events',
    tagline: 'We cater for any event that calls for delicious food.',
    image: eventsImg,
    path: '/events',
    delay: 2.2
  }
]

export default function Boxes() {
  return (
    <>
      <div className="boxes row no-gutters">
        {boxes.map(({ id, name, tagline, image, path, delay }) => (
          <motion.div
            className="box col-xl-4"
            key={id}
            initial={{
              opacity: 0,
              y: 200
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: delay, ease: 'easeOut' }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, delay: delay - 1.5, ease: 'easeOut' }
            }}
          >
            <div className="image">
              <motion.img
                src={image}
                alt={name}
                initial={{ scale: 1.4 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.8, delay: delay, ease: 'easeOut' }
                }}
                exit={{
                  scale: 0.9,
                  transition: {
                    duration: 0.3,
                    delay: delay - 1.5,
                    ease: 'easeOut'
                  }
                }}
              />
            </div>
            <Link className="content" to={path}>
              <h4 className="name">{name}</h4>
              <span className="tagline">{tagline}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  )
}
