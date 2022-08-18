import React, { Component } from "react";


export default class Lab3_2 extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link actice"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-design-pattern-lab"
              role="tab"
              aria-controls="nav-design-pattern"
              aria-selected="false"
            >
              Design
            </a>
            <a
              className="nav-item nav-link actice"
              id="nav-pattern-tab"
              data-toggle="tab"
              href="#nav-pattern-lab"
              role="tab"
              aria-controls="nav-pattern"
              aria-selected="false"
            >
              Implement
            </a>
          </div>
        </nav>
        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
          {/* design */}
          <div
            className="tab-pane fade show active"
            id="nav-design-pattern-lab"
            role="tabpanel"
            aria-labelledby="nav-design-pattern-tab"
          >
            <div className="row p-3">
              <div className="col ml-5 pt-3 pb-3 pr-3 pl-3">
                <h3 className="text-center">1. Design on paper</h3>
                <img
                  src="images/z-paper.jpg"
                  height="270px"
                  width="500px"
                  alt=""
                />
                <div className="mt-2">
                  <button className="btn btn-info ">
                    <a
                      href="images/z-paper.jpg"
                      download="19130017-l3-z-paper"
                    >
                      Download
                    </a>
                  </button>
                </div>
              </div>
              <div className="col ml-5 pt-3 pb-3 pr-3 pl-3 mb-2 ">
                <h3 className="text-center">2. Design on HTML </h3>
                <img
                  src="images/z-html.png"
                  alt=""
                  height="270px"
                  width="500px"
                />
                <div className="mt-2">
                  <button className="btn btn-info">
                    <a href="images/z-html.png" download="19130017-l3-z-html">
                      {" "}
                      Download{" "}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end design */}

          {/* implement */}
          <div
            className="tab-pane fade"
            id="nav-pattern-lab"
            role="tabpanel"
            aria-labelledby="nav-pattern-tab"
          >
            <section>
              <header
                className="site-navbar py-4 js-sticky-header site-navbar-target"
                role="banner"
              >
                <div className="container-fluid">
                  <div className="d-flex align-items-center">
                    <div className="site-logo mr-auto w-25">
                      <a href="index.html">Z-pattern</a>
                    </div>
                    <div className="mx-auto text-center">
                      <nav
                        className="site-navigation position-relative text-right"
                        role="navigation"
                      >
                        <ul
                          className="
                      site-menu
                      main-menu
                      js-clone-nav
                      mx-auto
                      d-none d-lg-block
                      m-0
                      p-0
                    "
                        >
                          <li>
                            <a href="#home-section" className="nav-link">
                              Home
                            </a>
                          </li>
                          <li>
                            <a href="#courses-section" className="nav-link">
                              Courses
                            </a>
                          </li>
                          <li>
                            <a href="#programs-section" className="nav-link">
                              Programs
                            </a>
                          </li>
                          <li>
                            <a href="#teachers-section" className="nav-link">
                              Teachers
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="ml-auto w-25">
                      <ul
                        className="
                    site-menu
                    main-menu
                    site-menu-dark
                    js-clone-nav
                    mr-auto
                    d-none d-lg-block
                    m-0
                    p-0
                  "
                      >
                        <li className="cta">
                          <a href="#contact-section" className="nav-link">
                            <span>Contact Us</span>
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="
                    d-inline-block d-lg-none
                    site-menu-toggle
                    js-menu-toggle
                    text-black
                    float-right
                  "
                      >
                        <span className="icon-menu h3" />
                      </a>
                    </div>
                  </div>
                </div>
              </header>
              <div className="intro-section" id="home-section">
                <div
                  className="slide-1"
                  style={{ backgroundImage: 'url("images/slider.jpg")' }}
                  data-stellar-background-ratio="0.5"
                >
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-lg-6 mb-4">
                            <h1 data-aos="fade-up" data-aos-delay={100}>
                              Learn From The Expert
                            </h1>
                            <p
                              className="mb-4"
                              data-aos="fade-up"
                              data-aos-delay={200}
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Maxime ipsa nulla sed quis rerum amet natus
                              quas necessitatibus.
                            </p>
                            <p data-aos="fade-up" data-aos-delay={300}>
                              <a
                                href="#"
                                className="btn btn-primary py-3 px-5 btn-pill"
                              >
                                Admission Now
                              </a>
                            </p>
                          </div>
                          <div
                            className="col-lg-5 ml-auto"
                            data-aos="fade-up"
                            data-aos-delay={500}
                          >
                            <form action method="post" className="form-box">
                              <h3 className="h4 text-black mb-4">Sign Up</h3>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email Addresss"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                />
                              </div>
                              <div className="form-group mb-4">
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Re-type Password"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="submit"
                                  className="btn btn-primary btn-pill"
                                  value="Sign up"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* end implement */}
        </div>
      </div>
    );
  }
}
