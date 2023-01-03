import { React, useEffect, useState } from "react";
import axios from "axios";
const Weekly_report = () => {
  useEffect(() => {
    searchreport();
  }, []);
  const [branchid, setbranch] = useState([]);
  const handlesubmit_week = (e) => {
    const data_t = {
      branchId: 1,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
    };
    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);
    let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
    let posturl_set = posturl + "/branches";
    console.log("puturl:", posturl_set);
    // setTimeout(console.log("puturl:", posturl_set), 30000);

    axios
      .get(posturl_set, data_t, config)
      .then((response) => {
        setbranch(response.data);
        console.log(response.status);
        console.log(response.data);
      })
      // .catch((e) => console.log('something went wrong :(', e));
      .catch((error) => {
        console.log("re:", error.message);
        console.log("re:", error.body);
        console.log("re:", error.config);
        console.log("re:", error.requests);
        console.log("re:", error.response.data);
      });
  };
  function searchreport() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches/1" + "/weekly-report";
    console.log("url:", url_set);
    const data_t = {
      branchId: 1,
      startDate: "2022-01-01",
      endDate: "2022-12-31",
    };
    axios
      .get(url_set, {
        params: {
          branchId: 1,
          startDate: "2022-01-01",
          endDate: "2022-12-31",
        },
      })
      .then(function (response) {
        setweekreport(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
        console.log("weekreport", response.data);

        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  const [weekreport, setweekreport] = useState([
    {
      user: {
        id: 1,
        username: "test123",
        realName: "김비틀웍스",
        phone: "010-1234-1234",
        email: "jack.bitlworks@gmail.com",
        birthDate: "1999-05-01",
        gender: "M",
        //nickname: "김비틀웍스",
        profileImgUrl: "https://image.naver.com",
        room: {
          id: 1,
          name: "A 학습실 1",
          availableSeat: 50,
          occupiedSeat: 5,
          status: "ACTIVE",
        },
        seatNumber: 0,
        location: "경기도 ",
        isDarkMode: false,
        status: "ACTIVE",
        lastLoginAt: "2022-11-23T06:00:55.738Z",
        groupList: [
          {
            name: "재수",
            status: "ACTIVE",
          },
        ],
      },
      id: 0,
      todoCount: 0,
      doneCount: 0,
      completedRate: "string",
      conditionRate: 0,
      concentrateRate: 0,
      accomplishmentRate: 0,
      isSent: true,
      totalTime: {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
    },
  ]);
  const weekList = weekreport.map((v) => (
    <tr>
      <td>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <input
            className="form-check-input widget-9-check"
            type="checkbox"
            value="1"
          />
        </div>
      </td>

      <td className="text-gray-800 fw-bold">{v.user.room.name}</td>
      <td className="text-gray-800 fw-bold">{v.user.groupList[0].name}</td>
      <td>{v.user.room.availableSeat}</td>
      <td className="text-gray-800 fw-bold">{v.user.realName}</td>
      <td>{v.todoCount}</td>
      <td>{v.doneCount}</td>
      <td>{v.completedRate}</td>
      <td>{v.conditionRate}/5</td>
      <td>{v.concentrateRate}/5</td>
      <td>{v.accomplishmentRate}/5</td>
      <td>
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          보기
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
              fill="currentColor"
            ></path>
            <rect
              x="21.9497"
              y="3.46448"
              width="13"
              height="2"
              rx="1"
              transform="rotate(135 21.9497 3.46448)"
              fill="currentColor"
            ></rect>
            <path
              d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </td>

      <td className="text-end pe-5" data-order="27">
        <span className="badge badge-light-danger">미전송</span>
      </td>
    </tr>
  ));
  return (
    <div className="weekly_report">
      <div
        id="kt_app_content"
        className="app-content flex-column-fluid stdy_w_rpt_content"
      >
        <div id="kt_app_content_container" className="app-container">
          <div className="d-flex flex-column flex-lg-row-fluid gap-7 gap-lg-10">
            <div className="card card-flush">
              <div className="card-header border-0 pt-5 stdy_w_rpt_top2">
                <div className="stdy_w_rpt_date d-flex align-items-center">
                  <label
                    className="col-form-label date_label me-4"
                    for="example-date"
                  >
                    시작일{weekreport.id}
                  </label>
                  <div className="date_div me-6">
                    <input
                      className="form-control input__slim"
                      type="date"
                      name="date"
                      id="example-date"
                    />
                  </div>
                  <label
                    className="col-form-label date_label me-4"
                    for="example-date"
                  >
                    종료일
                  </label>
                  <div className="date_div">
                    <input
                      className="form-control input__slim"
                      type="date"
                      name="date"
                      id="example-date"
                      placeholder="w"
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center position-relative stdy_w_rpt_sch_w">
                  <span className="svg-icon svg-icon-3 position-absolute ms-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x="17.0365"
                        y="15.1223"
                        width="8.15546"
                        height="2"
                        rx="1"
                        transform="rotate(45 17.0365 15.1223)"
                        fill="currentColor"
                      />
                      <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    id="kt_filter_search"
                    className="form-control form-control-solid border-body ps-14 input__slim"
                    placeholder="Search"
                  />
                </div>
              </div>

              <div className="card-body pt-0">
                <div className="d-flex flex-column gap-6 mt-4">
                  <div className="d-flex justify-content-between stdy_w_rpt_top">
                    <ul className="nav mb-2 mb-sm-0 stdy_w__top_input">
                      <li className="nav-item me-10">
                        <button
                          type="button"
                          className="btn btn-light-primary btn__slim"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_upload"
                        >
                          <span className="svg-icon svg-icon-3">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z"
                                fill="currentColor"
                              ></path>
                              <rect
                                x="11"
                                y="19"
                                width="10"
                                height="2"
                                rx="1"
                                transform="rotate(-90 11 19)"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="7"
                                y="13"
                                width="10"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <path
                                d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          주간레포트생성
                        </button>
                      </li>
                      <li>
                        <div className="form-check form-switch form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="allowchanges"
                            checked="checked"
                          />
                          <label
                            className="form-check-label fw-semibold text-gray-400 ms-3"
                            for="allowchanges"
                          >
                            자동운영
                          </label>
                        </div>
                      </li>
                    </ul>

                    <div className="card-toolbar">
                      <div className="stdy_w_rpt_radio">
                        <div className="form-check form-check-custom form-check-solid me-5 check__use">
                          <input
                            className="form-check-input check__use_input"
                            type="radio"
                            value=""
                            name="choice_use"
                            id="product_tax_yes"
                            checked="checked"
                          />
                          <label
                            className="form-check-label"
                            for="product_tax_yes"
                          >
                            학생
                          </label>
                        </div>
                        <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                          <input
                            className="form-check-input check__hold_input"
                            type="radio"
                            value=""
                            name="choice_use"
                          />
                          <label
                            className="form-check-label"
                            for="product_tax_no"
                          >
                            학부모
                          </label>
                        </div>
                        <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                          <input
                            className="form-check-input check__hold_input"
                            type="radio"
                            value=""
                            name="choice_use"
                          />
                          <label
                            className="form-check-label"
                            for="product_tax_no"
                          >
                            학생 + 학부모
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        href="#"
                        className="btn btn-primary btn__slim"
                        id="kt_invoice_submit_button"
                      >
                        <span className="svg-icon svg-icon-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
                              fill="currentColor"
                            ></path>
                            <path
                              opacity="0.3"
                              d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        전송
                      </button>
                    </div>
                  </div>

                  <table
                    className="table align-middle table-row-dashed fs-6 gy-5 stdy_w_rpt_table t__center"
                    id="kt_project_users_table"
                  >
                    <thead>
                      <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                        <th className="w-25px sorting_none">
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                              data-kt-check="true"
                              data-kt-check-target=".widget-9-check"
                            />
                          </div>
                        </th>
                        <th className="min-w-80px">학습관</th>
                        <th className="min-w-50px">관리그룹</th>
                        <th className="min-w-25px">좌석</th>
                        <th className="min-w-80px">이름</th>
                        <th className="min-w-50px">계획</th>
                        <th className="min-w-50px">실천</th>
                        <th className="min-w-50px">실천률</th>
                        <th className="min-w-80px">학습컨티션</th>
                        <th className="min-w-50px">집중</th>
                        <th className="min-w-50px">성취감</th>
                        <th className="min-w-50px">레포트</th>
                        <th className="min-w-50px text-end pe-5">전송유무</th>
                      </tr>
                    </thead>

                    <tbody className="fw-semibold text-gray-600 stdy_w_rpt_tbody">
                      {weekList}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly_report;
