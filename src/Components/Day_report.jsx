import { React, useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";

const Day_report = (props) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const [branch_num, setbranch_num] = useState(1);
  const [dayday, setday] = useState(today);
  useEffect(() => {
    searchplan(branch_num);
  }, []);
  useEffect(() => {
    console.log(props.detail_num);
    setbranch_num(props.detail_num);
    searchplan(props.detail_num);
  }, [props]);
  useEffect(() => {
    // searchplan(branch_num);
    console.log(branch_num);
  }, [dayday]);
  // useEffect(() => {
  //   console.log(props.detail_num);
  //   searchplan(branch_num);
  // }, [branch_num]);

  //console.log("det:", props.detail_num);

  const [branchid, setbranch] = useState([]);
  function set_day(e) {
    console.log(e);
    setday(e.target.value);
  }

  function searchplan(branch_num) {
    console.log("branch_num:", branch_num);
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches/" + branch_num + "/daily-progresses";
    console.log("url:", url_set);
    axios
      .get(url_set, {
        params: {
          date: dayday,
        },
      })
      .then(function (response) {
        setdayplan(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
        console.log("dayplan", response.data);

        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  const [dayplan, setdayplan] = useState([]);
  // const dayList = dayplan.map((v)=>{
  //                     <tr>
  //                       <td>
  //                         <div className="form-check form-check-sm form-check-custom form-check-solid">
  //                           <input
  //                             className="form-check-input widget-9-check"
  //                             type="checkbox"
  //                             value="1"
  //                           />
  //                         </div>
  //                       </td>

  //                       <td className="text-gray-800 fw-bold">{v.user.room.name}</td>
  //                       <td className="text-gray-800 fw-bold">재수</td>
  //                       <td>12</td>
  //                       <td className="text-gray-800 fw-bold">홍길동</td>
  //                       <td>32</td>
  //                       <td>30</td>
  //                       <td>95%</td>
  //                       <td>4/5</td>
  //                       <td>3/5</td>
  //                       <td>4/5</td>
  //                       <td>
  //                         <a
  //                           href="#"
  //                           data-bs-toggle="modal"
  //                           data-bs-target="#kt_modal_invite_friends"
  //                         >
  //                           보기
  //                           <svg
  //                             width="16"
  //                             height="16"
  //                             viewBox="0 0 24 24"
  //                             fill="none"
  //                             xmlns="http://www.w3.org/2000/svg"
  //                           >
  //                             <path
  //                               opacity="0.3"
  //                               d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
  //                               fill="currentColor"
  //                             ></path>
  //                             <rect
  //                               x="21.9497"
  //                               y="3.46448"
  //                               width="13"
  //                               height="2"
  //                               rx="1"
  //                               transform="rotate(135 21.9497 3.46448)"
  //                               fill="currentColor"
  //                             ></rect>
  //                             <path
  //                               d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
  //                               fill="currentColor"
  //                             ></path>
  //                           </svg>
  //                         </a>
  //                       </td>

  //                       <td className="text-end pe-5" data-order="27">
  //                         <span className="badge badge-light-success">
  //                           전송
  //                         </span>
  //                       </td>
  //                     </tr>

  // });
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
                    htmlFor="example-date"
                  >
                    해당 일자
                  </label>
                  <div className="date_div me-6">
                    <input
                      className="form-control input__slim"
                      type="date"
                      name="date"
                      id="example-date"
                      defaultValue={today}
                      onChange={set_day}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      searchplan(props.detail_num);
                    }}
                    style={{ "margin-left": "20px" }}
                  >
                    검색
                  </button>

                  <button
                    type="submit"
                    href="#"
                    className="btn btn-primary btn__slim btn_css"
                    id="kt_invoice_submit_button"
                    hidden
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
                    그래프로 보기
                  </button>
                </div>
              </div>

              <div className="card-body pt-0">
                <div className="d-flex flex-column gap-6 mt-4">
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
                        <th className="min-w-80px">구분</th>
                        <th className="min-w-50px">학습시작</th>
                        <th className="min-w-25px">관리그룹</th>
                        <th className="min-w-80px">학습실</th>
                        <th className="min-w-50px">좌석번호</th>
                        <th className="min-w-50px">이름</th>
                        <th className="min-w-50px">일일누적</th>
                        <th className="min-w-80px">현재학습</th>
                        <th className="min-w-50px">계획</th>
                        <th className="min-w-50px">실행</th>
                        <th className="min-w-50px">진행률</th>
                      </tr>
                    </thead>

                    <tbody className="fw-semibold text-gray-600 stdy_w_rpt_tbody">
                      {dayplan.map((data) => (
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

                          <td className="text-gray-800 fw-bold">
                            {data.nowStatus}
                          </td>
                          <td className="text-gray-800 fw-bold">
                            {data.studyStartTime}
                          </td>
                          {/* <td>{data.user.groupList[0].name}</td> */}
                          {data.user.groupList[0] == undefined ? (
                            <td></td>
                          ) : (
                            <td>{data.user.groupList[0].name}</td>
                          )}

                          <td className="text-gray-800 fw-bold">
                            {data.user.room.name}
                          </td>
                          <td>{data.user.seatNumber}</td>
                          <td>{data.user.realName}</td>
                          <td>{data.totalStudyTime}</td>
                          <td>{data.nowStudyTime}</td>
                          <td>{data.toDoCount}</td>
                          <td>{data.doneCount}</td>
                          <td>
                            {/* <a
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
                            </a> */}
                            {data.progressRate}
                          </td>
                        </tr>
                      ))}
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

export default Day_report;
