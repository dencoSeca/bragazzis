import React, { useEffect } from 'react'
import gsap from 'gsap'

// Components
import Banner from '../components/Banner'
import Boxes from '../components/Boxes'

const tl = gsap.timeline()

export default function Home() {
  useEffect(() => {
    tl.from('.line span', 0.8, {
      opacity: 0,
      y: 32,
      skewY: 4,
      delay: 0.7,
      ease: 'power3.easeOut',
      stagger: {
        amount: 0.3
      }
    })
      .from('.link', 0.8, {
        opacity: 0,
        ease: 'power3.easeOut'
      })
      .from('.box', 0.8, {
        opacity: 0,
        y: 200,
        ease: 'power4.easeOut',
        delay: -0.5,
        stagger: {
          amount: 0.3
        }
      })
      .from('.box .image img', 0.8, {
        scale: 1.2,
        ease: 'power4.easeOut',
        delay: -1.5,
        stagger: {
          amount: 0.3
        }
      })
  }, [])

  return (
    <>
      <Banner />
      <Boxes />
    </>
  )
}
