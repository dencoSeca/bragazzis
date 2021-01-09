import React from 'react'

// Components
import Banner from '../components/Banner'
import Boxes from '../components/Boxes'

function Home({openingHours}) {
  return (
    <>
      <Banner />
      <Boxes openingHours={openingHours} />
    </>
  )
}

export default Home
