import React, { Component } from "react";


export default class Lab2 extends Component {
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
                <p>Home / Lab 2</p>
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
                href="#nav-user-lab"
                role="tab"
                aria-controls="nav-user"
                aria-selected="false"
              >
                User Scenario
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
                  <p>
                    {" "}
                    <strong>(1)</strong> Tạo ra một{" "}
                    <strong>user scenario</strong>
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <strong>(2)</strong> Chọn 1 bước trong{" "}
                    <strong>user scenario</strong> để thiết kế 1 form giao diện
                    Web trên công cụ thiết kế đã chọn. <br />
                    Sau đó tạo ra <strong>file html</strong> tương ứng cho thiết
                    kế này.
                  </p>
                </li>
                <li>
                  <p>
                    Upload lên <strong>Firebase / github</strong>: trong file
                    html có chèn hình ảnh của user scenario ở{" "}
                    <strong>(1)</strong> và đường dẫn của file thiết kế ở{" "}
                    <strong>(2)</strong>.
                  </p>
                </li>
              </ul>
            </div>
            {/* end requirement */}

            <div
              className="tab-pane fade"
              id="nav-user-lab"
              role="tabpanel"
              aria-labelledby="nav-user-tab"
            >
              <img src="images\lab2.png" alt="Image user scenario" />
            </div>
            
            {/* design */}
            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              <div className="row p-3">
                <div className="col ml-5">
                  <h3 className="text-center">1. Design on paper</h3>
                  <img
                    src="images/l2-paper.jpg"
                    height="400px"
                    width="500px"
                    alt=""
                  />
                  <div className="mt-2">
                    <button className="btn btn-info ">
                      <a
                        href="images/l2-paper.jpg"
                        download="19130017-l2-paper"
                      >
                        Download
                      </a>
                    </button>
                  </div>
                </div>
                <div className="col ml-5 mb-2 ">
                  <h3 className="text-center">2. Design on HTML </h3>
                  <img
                    src="images/l2-html.png"
                    alt=""
                    height="400px"
                    width="500px"
                  />
                  <div className="mt-2">
                    <button className="btn btn-info">
                      <a href="images/l2-html.png" download="19130017-l2-html">
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
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <div className="container">
                <div className="window">
                  <div className="order-info">
                    <div className="order-info-content">
                      <h3 className="mt-2">Giỏ hàng</h3>
                      {/* sp1 */}
                      <div className="line" />
                      <table className="order-table">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="images/sp2.jpg"
                                className="full-width"
                              />
                            </td>
                            <td>
                              <span className="thin">
                                Nike Air Force 1 Easter
                              </span>
                              <br />
                              <span className="thin small">
                                {" "}
                                Color: Bạc/Trắng, Size: 37
                              </span>
                              <br />
                              <span>Số lượng: 1 </span>
                              <br />
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="price">
                                $73.91
                                <span>$121.74</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* end sp1 */}
                      {/* sp2 */}
                      <div className="line" />
                      <table className="order-table">
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="images/sp1.png"
                                className="full-width"
                              />
                            </td>
                            <td>
                              <span className="thin">
                                TIMBERLAND Giày Cổ Cao{" "}
                              </span>
                              <br />
                              <span className="thin small">
                                {" "}
                                Color: Black, Size: 37
                              </span>
                              <br />
                              <span>Số lượng: 1 </span>
                              <br />
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="price">
                                $134.74
                                <span>$260.44</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* end sp2 */}
                      {/* sp3 */}
                      <div className="line" />
                      <table className="order-table"></table>
                      {/* end sp3 */}
                      <div className="total">
                        <span style={{ float: "left" }}>
                          <div className="thin dense">VAT 19%</div>
                          <div className="thin dense">Delivery</div>
                          TOTAL
                        </span>
                        <span style={{ float: "right", textAlign: "right" }}>
                          <div className="thin dense">$39.64</div>
                          <div className="thin dense">$4.95</div>
                          $248.29
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="credit-info">
                    <div className="credit-info-content">
                      <table className="half-input-table">
                        <tbody>
                          <tr>
                            <td>Please select your card: </td>
                            <td>
                              <div className="dropdown" id="card-dropdown">
                                <div className="dropdown-btn" id="current-card">
                                  Visa
                                </div>
                                <div className="dropdown-select">
                                  <ul>
                                    <li>Master Card</li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <img
                        src="images/visa_logo.png"
                        height={80}
                        className="credit-card-image"
                        id="credit-card-image"
                      />
                      {/* form */}
                      <form>
                        <div className="form-row">
                          <div className="col form-group">
                            <label className>Card Number</label>
                            <input
                              type="text"
                              className="form-control"
                              id="num"
                              placeholder="0000 0000 0000 1234"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col form-group">
                            <label className>Card Holder</label>
                            <input
                              type="text"
                              className="form-control"
                              id="holder"
                              placeholder="Nguyen Van A"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col form-group">
                            <label className>Expires</label>
                            <input
                              type="text"
                              className="form-control"
                              id="exp"
                              placeholder="mm/yy"
                              required
                            />
                          </div>
                          <div className="col form-group">
                            <label className>CVV</label>
                            <input
                              type="text"
                              className="form-control"
                              id="cvv"
                              placeholder="CVV"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group ">
                            <button
                              className="pay-btn"
                              onclick="check()"
                              id="checkOut"
                            >
                              Checkout
                            </button>
                          </div>
                          {/* end form */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end implement */}
          </div>
        </section>
      </div>
    );
  }
}
