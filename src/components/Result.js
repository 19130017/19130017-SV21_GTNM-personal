import React, { Component } from "react";


export default class Result extends Component {
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
                <p>Home / Result</p>
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
                href="#nav-evaluate-lab"
                role="tab"
                aria-controls="nav-evaluate"
                aria-selected="false"
              >
                Evaluate
              </a>
              <a
                className="nav-item nav-link actice"
                id="nav-cumulativelessons-tab"
                data-toggle="tab"
                href="#nav-cumulativelessons-lab"
                role="tab"
                aria-controls="nav-cumulativelessons"
                aria-selected="false"
              >
                Cumulative lessons
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
                  Tạo một <strong>trang Result</strong> trên đó liệt kê những gì
                  mình đã làm/học được trong suốt quá trình làm bài tập nhóm.
                  <br /> Dẫn link tới từng trang do SV đã làm.
                </li>
                <li>
                  Tự đánh giá mình được{" "}
                  <strong>bao nhiêu % trong tổng số 100%</strong>
                  của bài tập nhóm
                </li>
              </ul>
            </div>
            {/* end requirement */}

            {/* evaluate */}
            <div
              className="tab-pane fade"
              id="nav-evaluate-lab"
              role="tabpanel"
              aria-labelledby="nav-evaluate-tab"
            >
              <div className="contain">
                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-user mr-1" />
                        Personal Web
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Làm bài tập đầy đủ</li>
                          <li>Áp dụng được ReactJS vào website</li>
                          <li>Hoàn thiện được website cá nhân</li>
                          <li>Chưa biết phối màu</li>
                        </ol>
                      </p>
                      <li>Hoàn thành: 100%</li>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-users mr-1" />
                        Group Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Hoàn thiện trang groupdiary</li>
                          <li>Hoàn thiện trang technical</li>
                          <li>Chuyển web sang react</li>
                        </ol>
                      </p>
                      <li>Hoàn thành: 100%</li>
                      <li>Đóng góp: 20%</li>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-globe mr-1" />
                        Project Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Chức năng đăng ký</li>
                          <li>Chức năng đăng nhập</li>
                          <li>Chuyển web sang react</li>
                        </ol>
                      </p>
                      <li>Hoàn thành: 100%</li>
                      <li>Đóng góp: 20%</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end evaluate */}

            {/* cumulativelessons */}
            <div
              className="tab-pane fade"
              id="nav-cumulativelessons-lab"
              role="tabpanel"
              aria-labelledby="nav-cumulativelessons-tab"
            >
              <div>
                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        {" "}
                        <i className="fa fa-user mr-1" />
                        Personal Web
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Có thêm kiến thức về UX/UI.</li>
                          <li>Biết thêm về HTML, CSS, ReactJS.</li>
                          <li>Tạo được website cá nhân theo đúng yêu cầu.</li>
                          <li>Biết cách xử lý hình ảnh.</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-users mr-1" />
                        Group Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Biết cách làm việc nhóm</li>
                          <li>
                            Biết thêm khả năng làm việc trong tập thể của bản
                            thân
                          </li>
                          <li>Nhận ra được điểm yếu khi làm việc nhóm.</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-globe mr-1" />
                        Project Website
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>
                            Biết thêm thông tin về quy trình của một đồ án
                          </li>
                          <li>Biết cách quản lý thời gian</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-columns">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="holder.js/100x180/"
                      alt=""
                    />
                    <div className="card-body">
                      <h4 className="card-title">
                        <i className="fa fa-user mr-1" />
                        Nhận xét về nhóm
                      </h4>
                      <p className="card-text">
                        <ol>
                          <li>Mọi người đều có tinh thần học tập</li>
                          <li>Tiếp thu kiến thức nhanh</li>
                          <li>Nhóm trưởng chưa có kinh nghiệm</li>
                          <li>
                            Công việc phân công không rõ ràng dẫn đến chậm tiến
                            độ
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end cumulativelessons */}
          </div>
        </section>
      </div>
    );
  }
}
