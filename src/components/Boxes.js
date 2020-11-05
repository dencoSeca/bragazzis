import React from 'react'

// Assets
import cafeImg from '../assets/images/cafe-full.jpg'
import shopImg from '../assets/images/shop.jpg'
import eventsImg from '../assets/images/sandwiches.jpg'

const boxes = [
  {
    id: 1,
    name: 'Cafe',
    tagline: 'Grab a sandwich, coffee and a sweet treat.',
    image: cafeImg
  },
  {
    id: 2,
    name: 'Shop',
    tagline:
      'Seek inspiration from our packed shelves full of fresh food and pantry fillers.',
    image: shopImg
  },
  {
    id: 3,
    name: 'Events',
    tagline: 'We cater for any event that calls for delicious food.',
    image: eventsImg
  }
]

export default function Boxes() {
  return (
    <>
      <div className="boxes">
        {boxes.map(({ id, name, tagline, image }) => (
          <div className="box" key={id}>
            <div className="image">
              <img src={image} alt={name} />
            </div>
            <div className="content">
              <h4 className='name'>{name}</h4>
              <span className='tagline'>{tagline}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
