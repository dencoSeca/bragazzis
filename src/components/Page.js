import React, {useEffect} from 'react'
import gsap from 'gsap'

function Page({ title, children }) {
  useEffect(() => {
    gsap.from(['.title', '.content'], 0.8, {
      delay: 0.2,
      y: 48,
      opacity: 0,
      ease: 'power3.easeOut',
      stagger: {
        amount: 0.25
      }
    })
  }, [])

  
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Page
