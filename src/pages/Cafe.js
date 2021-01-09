import React from 'react'

// Components
import Page from '../components/Page'

function Cafe({ openingHours }) {
  return (
    <>
      <Page title={'Cafe'}>
        <div className="container">
          <p>
            We use our own carefully curated blend roasted by Darkwoods coffee,
            West Yorkshire. We only use specialty graded coffee, which has a
            cleaner and more distinctive flavour than cheaper commercial coffee,
            and is traceable back to the skilled farmers that produce it.
          </p>
          <div className="cafe-screen__covid">
            <h4>Covid Restrictions</h4>
            <p>
              We want to reassure you that we are putting all possible measures
              in place to keep you and our team safe so that you can confidently
              enjoy your visit.
            </p>
            <p>
              We’re following all government guidelines and working on best
              practice measures within the shops. We have completed all
              necessary risk assessments and all procedures and assessments will
              be constantly reviewed and updated where necessary in line with
              government guidelines.
            </p>
            <p>
              We ask you to please use common sense to play your part in keeping
              everyone safe. In return we will be doing the same for you.
            </p>
            <p>
              Due to the constantly changing nature of this guidance, we will be
              continuously reviewing our procedures related to capacity.
            </p>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Cafe
