import React from 'react'

function Page({ title, children }) {
  return (
    <>
      <div className="page">
        <div className="container-fluid">
          <div className="row">
            <div className="title col-xl-2">
              <h1>{title}</h1>
            </div>
            <div className="content col-xl-10">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
