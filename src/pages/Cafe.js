import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import Page from '../components/Page'

function Cafe() {
  const [placeData, setPlaceData] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBMnHkqSbbWDI8oipDnotNtzf7AltbSquM&place_id=ChIJXQTkrGGCeUgRSaL1gEOk_MY&fields=opening_hours/weekday_text'
      )
      .then(response => {
        setPlaceData(response.data.result.opening_hours.weekday_text)
      })
  }, [])

  return (
    <>
      <Page title="Cafe">
        <div className="cafe">
          {placeData.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </div>
      </Page>
    </>
  )
}

export default Cafe
