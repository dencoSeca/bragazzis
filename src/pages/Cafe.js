import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Cafe'}>
        <div className="cafe-screen__background-image">
          <div className="cafe-screen__background-image__tint"></div>
          <p>
            We use our own carefully curated blend roasted by Darkwoods coffee,
            West Yorkshire. We only use specialty graded coffee, which has a
            cleaner and more distinctive flavour than cheaper commercial coffee,
            and is traceable back to the skilled farmers that produce it.
          </p>
        </div>
      </Page>
    </>
  )
}

export default Cafe
