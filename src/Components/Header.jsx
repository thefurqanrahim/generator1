import React from 'react'

export default function header() {
    return (
        <>
        <section className="header">
            <div className="container container-1">
                
                    <div className="first">
                       <h2> Github Username </h2>
                    </div>
                 
                    <form className="form-inline my-2 my-lg-0 d-flex">
                    <div className="first-1 col-8">
      <input className="form-control mr-sm-2 no-outline" type="search" placeholder="Enter your name" aria-label="Search" />
      </div>
      <div className="first-2 col-4">
      <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Generate</button>
      </div>
    </form>
                    
                </div>
        </section>
        </>
    )
}
