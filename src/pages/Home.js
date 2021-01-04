import React from 'react'

// Components
import Banner from '../components/Banner'
import Boxes from '../components/Boxes'

export default function Home({openingHours}) {
  return (
    <>
      <Banner />
      <Boxes openingHours={openingHours} />
    </>
  )
}
