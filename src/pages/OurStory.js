import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import pageBanner from '../assets/images/shop-01.jpg'

function OurStory() {
  return (
    <>
      <Page title={'Our Story'}>
        <div className="our-story-screen">
          <div className="row no-gutters">
            <div className="our-story-screen__page-banner col-md-6">
              <img src={pageBanner} alt="" />
            </div>
            <div className="our-story-screen__content col-md-6">
              <h4>History</h4>
              <p>
                Bragazzi’s opened in Sheffield in 2003, owned by Matteo
                Bragazzi. Bragazzi’s was (perhaps is) an outlier and safe haven
                for people who like dry ham and little cups of coffee.
              </p>
              <p>
                Matteo has a brother, Dino. They often holiday together and were
                in Rome one year when Matteo drifted into a melancholy state of
                mind. Sorry to see him this way, Dino started up a monologue on
                a history of Italian dining in London. Their dad had come over,
                like so many others, and made a business of food selling. As
                Dino reached a point about napkins, Matteo recognised his fate
                as the same.
              </p>
              <p>
                He interrupted mid sentence and asked for five hundred euros.
                They did a big shop of crisps and pasta and floated it to
                England, ready for the cafe to come.
              </p>
              <h4>What we do</h4>
              <p>
                Bragazzi’s is a cafe, delicatessen and shop. We sell Italian
                perishables and dry goods, all of which are good to eat. Most
                people come for the sandwiches, which are potent assemblies of
                D.O.C cheese, salami and preserved vegetables.
              </p>
              <p>
                At breakfast, we have pastries. In summer we have gelato. In
                winter, we have shelves of hard-to-find Christmas produce direct
                from producers in Italy.
              </p>
              <h4>Services</h4>
              <p>
                Bragazzi’s cater for all functions. All of our food is made
                in-house and shaped around what you need for your event.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default OurStory
