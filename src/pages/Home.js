import React, { useEffect } from 'react'
// import gsap from 'gsap'

// Components
import Banner from '../components/Banner'
import Boxes from '../components/Boxes'

// const tl = gsap.timeline()
// const ease = 'power3.easeOut'

export default function Home() {
  // useEffect(() => {
  //   tl.from('.line span', 0.8, {
  //     opacity: 0,
  //     y: 32,
  //     skewY: 4,
  //     delay: 0.3,
  //     ease: ease,
  //     stagger: {
  //       amount: 0.3
  //     }
  //   })
  //     .from('.link', 1, {
  //       opacity: 0,
  //       delay: 0.5,
  //       ease: ease
  //     })
  //     .from('.box', 0.8, {
  //       opacity: 0,
  //       y: 200,
  //       ease: ease,
  //       delay: -0.5,
  //       stagger: {
  //         amount: 0.3
  //       }
  //     })
  //     .from('.box .image img', 1, {
  //       scale: 1.4,
  //       ease: ease,
  //       delay: -1.5,
  //       stagger: {
  //         amount: 0.3
  //       }
  //     })
  //     // Enable scrolling after animation has finished
  //     .to('.boxes', 0, {
  //       css: {
  //         overflow: 'auto'
  //       }
  //     })
  // }, [])

  return (
    <>
      <Banner />
      <Boxes />
    </>
  )
}
