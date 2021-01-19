import React from 'react'

// Components
import Page from '../components/Page'

// Assets
import ticketsImg from '../assets/images/bragazzis-tickets.jpg'

function OurStory() {
  return (
    <>
      <Page title={'La Storia'} color="#006B9B">
        <div className="banner">
          <img src={ticketsImg} alt="" className="banner__image" />
        </div>
        <div className="container">
          <div className="content-card">
            <h4>History</h4>
            <p>
              Bragazzi’s opened in Sheffield in 2003 and is owned by Matteo
              Bragazzi. Bragazzi’s was (perhaps is) an outlier and safe haven
              for people who enjoy the “qualcosa in più“.
            </p>
            <p>
              Matteo has a brother, Dino, they often holiday together. In Rome
              one evening, enjoying a Shakerato, Matteo’s mind drifted. Sorry to
              see him this way, Dino started up a monologue on their family
              history of Italian dining in London. Their father had come over,
              like so many others, and made a business of selling food. As Dino
              reached a point about the Corradi brothers, Matteo recognised his
              fate as the same. And so, the bet was placed over a plastic table,
              outside a bar in Fiano Romano on that hot evening in 2002. They
              did a big shop with help from Zia Maria and floated it to England,
              ready for the cafe to come.
            </p>
          </div>
          <div className="our-story__content">
            <div className="content-card">
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
            </div>
            <div className="content-card">
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
