import React from 'react'

function Page({ title, children }) {
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
