import React from 'react'

export default function Main() {
    return (
        <>
            <section className="main">
                <div className="container container-2">
                    <div className="first-session">
                        <h1 className="h-1">[Github Username]</h1>
                        <p className="pera-1">A passionate Github user</p>
                        <ul className="pt-3 pb-3">
                            <li>
                                <a href="https://www.facebook.com/">http://www.example.com</a>
                            </li>
                        </ul>
                        <p>On gihub since [YEAR], [USERNAME] is a developer based in [CITY],
                            [COUNTRY] with <span>[XXX] public repositories</span> and <span>[XX] followers</span>
                        </p>
                    </div>
                    <div className="second-session pt-5 pb-5">
                        <h3 className="pb-3">Languages</h3>
                        <div className="row">
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                        </div>
                        <div className="row">
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                            <div className='col-3'><p><span> [Lang] </span>  [XX]%  </p></div>
                        </div>
                    </div>
                    <div className="third-session">
                        <h3 className=" pb-3">Popular Repositories</h3>
                        <div className="row">
                            <div className="col-lg-6 col-12 tect-md-center">
                                <p> <span> [Repo name] </span> </p>
                            </div>
                            <div className="col-lg-6 col-12 tect-md-center">
                                <p className="pera-2">[Year from] - [Year to] </p>
                            </div>
                        </div>
                        <div className=" pb-3">
                        <p>[Lang] - [Repo rights] </p>
                        <p>[Description]</p>
                        <p>This repository has [XXX] stars and [XXX] forks.If you
                            would like more imformation about this repository and my contributed code, please visit <span>[the repo]</span> on Github
                        </p>

                         <hr />
                         </div>

                         <div className="row">
                            <div className="col-lg-6 col-12 tect-md-center">
                                <p> <span> [Repo name] </span> </p>
                            </div>
                            <div className="col-lg-6 col-12 tect-md-center">
                            <p className="pera-2">  [Year from] - [Year to]</p>
                            </div>
                        </div>
                        <div className="pb-3">
                        <p>[Lang] - [Repo rights] </p>
                        <p>[Description]</p>
                        <p>This repository has [XXX] stars and [XXX] forks.If you
                            would like more imformation about this repository and my contributed code, please visit <span>[the repo]</span> on Github
                        </p>
                         <hr />
                         </div>


                         <div className="row">
                            <div className="col-lg-6 col-12 tect-md-center">
                                <p> <span> [Repo name] </span> </p>
                            </div>
                            <div className="col-lg-6 col-12 tect-md-center">
                            <p className="pera-2">  [Year from] - [Year to]</p>
                            </div>
                        </div>
                        <div className="pb-5">
                        <p>[Lang] - [Repo rights] </p>
                        <p>[Description]</p>
                        <p>This repository has [XXX] stars and [XXX] forks.If you
                            would like more imformation about this repository and my contributed code, please visit <span>[the repo]</span> on Github
                        </p>
                         <hr />
                         </div>
                    </div>
                </div>

            </section>
        </>
    )
}
