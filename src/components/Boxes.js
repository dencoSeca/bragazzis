import React from 'react'
import { Link } from 'react-router-dom'

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
    path: '/cafe'
  },
  {
    id: 2,
    name: 'Shop',
    tagline:
      'Seek inspiration from our packed shelves full of fresh food and pantry fillers.',
    image: shopImg,
    path: '/shop'
  },
  {
    id: 3,
    name: 'Events',
    tagline: 'We cater for any event that calls for delicious food.',
    image: eventsImg,
    path: '/events'
  }
]

export default function Boxes() {
  return (
    <>
      <div className="boxes row no-gutters">
        {boxes.map(({ id, name, tagline, image, path }) => (
          <div className="box col-xl-4" key={id}>
            <div className="image">
              <img src={image} alt={name} />
            </div>
            <Link className="content" to={path}>
              <h4 className='name'>{name}</h4>
              <span className='tagline'>{tagline}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
