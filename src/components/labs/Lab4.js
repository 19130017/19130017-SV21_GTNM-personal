import React, { useState, Component } from "react";

export default class Lab4 extends Component {
  render() {
    return (
      <div>
        {/* breadcrumb */}
        <div
          className="intro-section small"
          style={{
            backgroundImage: 'url("images/background.jpeg")',
            marginTop: "86px",
          }}
        >
          <div className="container">
            <div className="row align-items-center text-center">
              <div className="intro">
                <p>Home / Lab 4</p>
              </div>
            </div>
          </div>
        </div>
        {/* end breadcrumb */}

        <section className="mr-5 ml-5 mt-5 tabs-section">
          <nav>
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home-lab"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Requirement
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-design-lab"
                role="tab"
                aria-controls="nav-design"
                aria-selected="false"
              >
                Design
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-implement-tab"
                data-toggle="tab"
                href="#nav-implement-lab"
                role="tab"
                aria-controls="nav-implement"
                aria-selected="false"
              >
                Implement
              </a>
            </div>
          </nav>
          <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
            {/* requirement */}
            <div
              className="tab-pane fade show active"
              id="nav-home-lab"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ul>
                <p>
                  <strong>Yêu cầu: </strong>
                </p>
                <li>
                  Tạo một trang Web có nội dung bất kỳ, sử dụng linh hoạt tất cả
                  những phần sau: <br />{" "}
                  <strong>
                    <ul>
                      <li>Input Controls</li>
                      <li>Navigation</li>
                      <li>Animations</li>
                      <li>Default Settings</li>
                      <li>Guided Actions</li>
                    </ul>
                  </strong>
                </li>
                <li>Có biểu mẫu liên hệ</li>
              </ul>
            </div>
            {/* end requirement */}

            {/* design */}
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <div>
                <div className="row p-3">
                  <div className="col ml-5">
                    <h3 className="text-center">1. Design on paper</h3>
                    <img
                      src="images/l4-paper.jpg"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/l4-paper.jpg"
                          download="19130017-l4-1-paper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="col ml-5">
                    <h3 className="text-center">1. Design on paper</h3>
                    <img
                      src="images/l4-paper2.jpg"
                      height="400px"
                      width="500px"
                      alt=""
                    />
                    <div className="mt-2">
                      <button className="btn btn-info ">
                        <a
                          href="images/l4-papper2.jpg"
                          download="19130017-l4-2-paper"
                        >
                          Download
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                {/* html */}
                <div className="row">
                  <div className="col ml-5 mb-2 ">
                    <h3 className="text-center">2. Design on HTML </h3>
                    <img
                      src="images/l4-html1.png"
                      alt=""
                      height="204px"
                      width="500px"
                    />
                    <div className="mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/l4-html1.png"
                          download="19130017-l4-1-html"
                        >
                          {" "}
                          Download{" "}
                        </a>
                      </button>
                    </div>
                  </div>
                  <div className="col ml-5 mb-2 ">
                    <h3 className="text-center">2. Design on HTML </h3>
                    <img
                      src="images/l4-html2.png"
                      alt=""
                      height="204px"
                      width="340px"
                    />
                    <div className="mt-2">
                      <button className="btn btn-info">
                        <a
                          href="images/l4-html2.png"
                          download="19130017-l4-2-html"
                        >
                          {" "}
                          Download{" "}
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end design */}

            {/* implement */}
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <div>
                {/* nav */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#">
                    <img src="images/logo.png" alt="" />
                  </a>
                  <div
                    className="collapse navbar-collapse mr-3 ml-3"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Điện thoại <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Laptop
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Phụ kiện
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            Pin sạc dự phòng
                          </a>
                          <a className="dropdown-item" href="#">
                            Ốp lưng điện thoại
                          </a>
                          <div className="dropdown-divider" />
                          <a className="dropdown-item" href="#">
                            Loa
                          </a>
                          <a className="dropdown-item" href="#">
                            Tai nghe
                          </a>
                          <a className="dropdown-item" href="#">
                            Usb- Ổ Cứng
                          </a>
                          <a className="dropdown-item" href="#">
                            Chuột máy tính
                          </a>
                          <a className="dropdown-item" href="#">
                            Balo/ Túi chống sốc
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div>
                      <form className="form-inline my-2 my-lg-0">
                        <input
                          className="form-control mr-sm-2 search-l4"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          <i className="fa fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </nav>
                {/* end nav */}

                {/* breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Phụ kiện</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ốp lưng điện thoại
                    </li>
                  </ol>
                </nav>
                {/* end breadcrumb */}

                {/* content */}
                <div>
                  <div className="row justify-content-between">
                    {/* img */}
                    <div className="col-lg-6">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={1}
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={2}
                          />
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={3}
                          />
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100"
                              src="images/l4-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="images/l4-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="images/l4-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100"
                              src="images/l4-4.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carouselExampleIndicators"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          />
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                    {/* details */}
                    <div className="col-lg-6">
                      <div className="row">
                        <span>
                          Ốp lưng iphone Water Color cạnh vuông BVC
                          6/6plus/6s/6splus
                          <br />
                          7/7plus/8/8plus/x/xr/xs/11/12/pro/max/plus/promax
                        </span>
                      </div>
                      {/* danh gia */}
                      <div className="d-flex">
                        <div className="d-flex">
                          <div className="text-rating mr-4">4.9</div>
                          <div className="rate">
                            <div className="row">
                              <div className="col-lg-0">
                                <i className="fa fa-star-o" />
                              </div>
                              <div className="col-lg-0">
                                <i className="fa fa-star-o" />
                              </div>
                              <div className="col-lg-0">
                                <i className="fa fa-star-o" />
                              </div>
                              <div className="col-lg-0">
                                <i className="fa fa-star-o" />
                              </div>
                              <div className="col-lg-0">
                                <i className="fa fa-star-o" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="ml-4 mr-3">|</span>
                        <div className="d-flex">
                          <div className="ml-3">
                            6,8k <span>Đánh giá</span>
                          </div>
                        </div>
                        <span className="ml-3 mr-3">|</span>
                        <div className="d-flex">
                          <div className="ml-3">
                            18,6k <span>Đã bán</span>
                          </div>
                        </div>
                      </div>
                      {/* gia */}
                      <div className="d-flex align-items-center">
                        <div className="price-fact mr-3">₫32.000 - ₫44.000</div>
                        <div className="d-flex align-items-center">
                          <div className="sale mr-3">₫1.000 - ₫22.000</div>
                          <div className="percent">98% giảm</div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label className="group-color">Nhóm màu</label>
                        <div className="d-flex align-items-center ml-3 mt-2">
                          <button className="product-variation">
                            Hồng Cánh Xen
                          </button>
                          <button className="product-variation">
                            Xanh Tím Ốp XámXanh
                          </button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <label className="group-color">Dòng máy</label>
                        <div className="d-flex align-items-center ml-3 mt-2">
                          <button className="product-variation">IP6/6S</button>
                          <button className="product-variation">IP7/8</button>
                          <button className="product-variation">
                            IP 12ProMax
                          </button>
                          <button className="product-variation">IP 11</button>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <label className="group-color">Số lượng</label>
                        <div className="d-flex align-items-center ml-4">
                          <div className="row">
                            <input
                              className="minus is-form"
                              type="button"
                              defaultValue="-"
                            />
                            <input
                              aria-label="quantity"
                              className="input-qty"
                              max={10}
                              min={1}
                              name
                              type="number"
                              defaultValue={1}
                            />
                            <input
                              className="plus is-form"
                              type="button"
                              defaultValue="+"
                              data-toggle="tooltip"
                              title="React chưa rõ cách làm"
                            />
                          </div>
                        </div>
                      </div>
                      {/* dat hang */}
                      <div className="order mt-5">
                        <div className="d-flex">
                          <button type="button" className="shopping">
                            <i className="fa fa-shopping-cart" />
                            <span>Thêm vào giỏ hàng</span>
                          </button>
                          <button
                            type="button"
                            className="shopping buy-now"
                            aria-disabled="false"
                          >
                            Mua ngay
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end details */}
                  </div>
                </div>
                {/* end content */}

                {/* footer */}
                <section
                  className="ftco-section contact-section ftco-no-pb mt-3"
                  id="contact-section"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="row  mb-5 pb-3 mt-5 ">
                        <div className="col-lg-0 heading-section text-center">
                          <span className="subheading">Contact me</span>
                          <h2 className="mb-4">Have a Support?</h2>
                          <p>
                            If you want to help, please feel free to contact me
                          </p>
                        </div>
                      </div>
                      <div className="row block-9">
                        <div className="col-md-8">
                          <form
                            action="#"
                            className="bg-light p-4 p-md-5 contact-form"
                          >
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea
                                    name
                                    id
                                    cols={30}
                                    rows={7}
                                    className="form-control"
                                    placeholder="Message"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary py-3 px-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-4 d-flex pl-md-5 mt-5">
                          <div className="row">
                            <div className="dbox w-100 d-flex">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-map-marker" />
                              </div>
                              <div className="text">
                                <p>
                                  <span>Address:</span> Biên Hòa, Đồng Nai
                                </p>
                              </div>
                            </div>
                            <div className="dbox w-100 d-flex">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-phone" />
                              </div>
                              <div className="text">
                                <p>
                                  <span>Phone:</span>{" "}
                                  <a href="tel://1234567920">0387655xxx</a>
                                </p>
                              </div>
                            </div>
                            <div className="dbox w-100 d-flex">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-paper-plane" />
                              </div>
                              <div className="text">
                                <p>
                                  <span>Email:</span>{" "}
                                  <a href="mailto:dothanhbinhdev@gmail.com">
                                    dothanhbinhdev@gmail.com
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="dbox w-100 d-flex">
                              <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-globe" />
                              </div>
                              <div className="text">
                                <p>
                                  <span>Website</span> <a href="#">Here</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* end footer */}
              </div>
            </div>
            {/* end implement */}
          </div>
        </section>
      </div>
    );
  }
}
