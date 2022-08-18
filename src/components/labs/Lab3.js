import React, { Component } from "react";
import Lab3_1 from "./Lab3_1";
import Lab3_2 from "./Lab3_2";
export default class Lab3 extends Component {
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
                <p>Home / Lab 3</p>
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
                F-Pattern
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
                Z-pattern
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
                    Trong menu <strong>Labs</strong>, tạo 1 menu{" "}
                    <strong>Lab3 (file lab3.html)</strong> sau đó tạo 2 tab{" "}
                    <strong>Ex1, Ex2</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ex1</strong>: Thiết kế một trang Web đơn giản sử
                    dụng mẫu <strong>F-pattern</strong>
                    <br />
                    ==&gt; chuyển sang <strong>html (ex1.html)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Ex2</strong>: Thiết kế một trang Web đơn giản sử
                    dụng mẫu <strong>Z-pattern</strong>
                    <br />
                    ==&gt; chuyển sang <strong>html (ex2.html)</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Với cả <strong>Ex1, Ex2</strong>: Tạo 2{" "}
                    <strong>tab Design và Implementation</strong>:
                  </p>
                  <ul>
                    <li>
                      <strong>Design</strong>: chụp lại hình ảnh để có cái nhìn
                      tổng quan về file thiết kế,
                      <br />
                      có <strong>nút Download</strong> để download file thiết kế
                      về nếu muốn
                    </li>
                    <li>
                      <strong>Implementation</strong>: nội dung phần hiện thực
                      trên html
                    </li>
                  </ul>
                </li>
                <li>
                  Upload lên <strong>Firebase / Github</strong>
                </li>
              </ul>
            </div>
            {/* end requirement */}

            <div
              className="tab-pane fade"
              id="nav-design-lab"
              role="tabpanel"
              aria-labelledby="nav-design-tab"
            >
              {/* <Lab3_fpattern /> */}
              <Lab3_1 />
            </div>
            <div
              className="tab-pane fade"
              id="nav-implement-lab"
              role="tabpanel"
              aria-labelledby="nav-implement-tab"
            >
              <Lab3_2 />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
