/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { compareByFieldSpec } from "@fullcalendar/core";
const Branch_detail = (props) => {
  const reset = useRef();
  const [data, setdata] = useState({
    id: "",
    name: "",
    status: "",
    head: {
      email: "",
      phone: "",
      location: "",
      nickname: "",
    },
  });
  let detail_num;
  useEffect(() => {
    console.log("props", props);
    // setdetailnum(props.detail_num);
    detail_num = props.detail_num;
    if (props.detail_num == "" || props.detail_num == undefined) {
      console.log("공백");
    } else if (props.detail_num == "0") {
      console.log("0");
      setdata({
        id: "",
        name: "",
        status: "",
        head: {
          email: "",
          phone: "",
          location: "",
          nickname: "",
        },
      });
      reset.current.click();
    } else {
      detail_num = props.detail_num;
      spec_branch_Api();
      console.log(detail_num);
    }
  }, [props]);
  function spec_branch_Api() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users" + "/owners/" + detail_num;
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setdata(response.data);
        console.log("data:", data);
        console.log("head:", data.head);
        console.log(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
        alert("유효성 검사 확인 필요", error.message);
      });
  }
  const handles = (e) => {
    e.preventDefalut();
  };

  const handleSubmit = (e) => {
    if (props.detail_num == "0") {
      // alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        brandId: 1,

        username: e.target[1].value,
        password: e.target[4].value,
        password2: e.target[5].value,
        realName: e.target[1].value,
        phone: e.target[2].value,
        email: e.target[3].value,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "users" + "/owners";
      console.log("puturl:", posturl_set);
      // setTimeout(console.log("puturl:", posturl_set), 30000);

      axios
        .post(posturl_set, data_t, config)
        .then((response) => {
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
          alert("유효성 검사 확인 필요", error.message);
        });
    } else {
      // alert(event.target[1].value);
      // alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);
      // console.log(event.target[0].value);

      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      // console.log(e.target[0].value);
      const data_t = {
        password: e.target[4].value,
        password2: e.target[5].value,
        realName: e.target[1].value,
        phone: e.target[2].value,
        email: e.target[3].value,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "users" + "/owners/" + data.id;
      console.log("puturl:", posturl_set);
      // setTimeout(console.log("puturl:", posturl_set), 30000);

      axios
        .put(posturl_set, data_t, config)
        .then((response) => {
          console.log(response.status);
          console.log(response.data);
        })
        // .catch((e) => console.log('something went wrong :(', e));
        .catch((error) => {
          console.log("re:", error.message);
          console.log("re:", error.body);
          console.log("re:", error.config);
          console.log("re:", error.requests);
          alert("유효성 검사 확인 필요", error.message);
          console.log("re:", error.response.data);
        });
    }
  };
  return (
    <div className="branch_detail">
      <div className="col-xl-12 mb-5 mb-xl-10 card__right_wrap">
        <form
          onSubmit={function (event) {
            //event.preventDefault();
            handleSubmit(event);
          }}
        >
          <div className="card card-flush h-xl-100 card__right">
            <div className="card-header py-7">
              <div
                className="card-title mb-0 gap-4 gap-lg-8 gap-xl-10 nav nav-tabs border-bottom-0"
                data-kt-table-widget-3="tabs_nav"
              >
                <div
                  className="fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn on"
                  data-kt-table-widget-3="tab"
                  data-kt-table-widget-3-value="Show All"
                >
                  원장
                </div>
              </div>
            </div>

            <div className="card-body pt-1 card_right_body right__tab_con right__tab01_con on">
              <div className="row mb-5">
                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    학원본사
                  </label>

                  <select
                    name="position"
                    data-control="select2"
                    data-placeholder="Select a position..."
                    className="form-select form-select-solid"
                  >
                    <option value="Web Developer">겨울신록</option>
                    <option value="Web Designer">봄신록</option>
                    <option value="Art Director">여름신록</option>
                    <option value="Finance Manager">가을신록</option>
                    <option value="Project Manager">어나더레벨</option>
                    <option value="System Administrator">최고최고최고</option>
                  </select>
                </div>

                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    원장명
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    defaultValue={data.realName}
                    name=""
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    연락처
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    defaultValue={data.phone}
                  />
                </div>

                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    이메일
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    defaultValue={data.email}
                    name=""
                  />
                </div>
              </div>

              <div className="row mb-5 row__line">
                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    비밀번호
                  </label>

                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholer=""
                  />
                </div>

                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    비밀번호 확인
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder=""
                    name=""
                  />
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-4 fv-row">
                  <label className="fs-5 fw-semibold mb-2">
                    최종 수정자 ID
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-solid"
                    defaultValue="wintergreen"
                    name=""
                    readonly
                  />
                </div>

                <div className="col-md-4 fv-row">
                  <label className="fs-5 fw-semibold mb-2">
                    최종 수정 일시
                  </label>

                  <input
                    type="date"
                    className="form-control form-control-solid"
                    defaultValue="2019-09-22"
                    name=""
                    readonly
                  />
                </div>

                <div className="col-md-4 fv-row">
                  <label className="fs-5 fw-semibold mb-2">사용</label>

                  <div className="d-flex check__use_wrap">
                    <div className="form-check form-check-custom form-check-solid me-5 check__use">
                      <input
                        className="form-check-input check__use_input"
                        type="radio"
                        defaultValue=""
                        name="choice_use"
                        id="product_tax_yes"
                        defaultChecked="checked"
                      />
                      <label className="form-check-label" for="product_tax_yes">
                        사용
                      </label>
                    </div>
                    <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                      <input
                        className="form-check-input check__hold_input"
                        type="radio"
                        defaultValue=""
                        name="choice_use"
                      />
                      <label className="form-check-label" for="product_tax_no">
                        대기
                      </label>
                    </div>
                    <div className="form-check form-check-custom form-check-solid check__delet">
                      <input
                        className="form-check-input check__delet_input"
                        type="radio"
                        defaultValue=""
                        name="choice_use"
                      />
                      <label className="form-check-label" for="product_tax_no">
                        삭제
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pt-1 card_right_body right__tab_con right__tab02_con">
              <div className="right__tab02_table tab02 mb-20">
                <select
                  name="status"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Filter"
                  className="form-select form-select-solid form-select-sm fw-bold w-100px"
                >
                  <option value="1" selected="selected">
                    사용
                  </option>
                  <option value="2">대기</option>
                </select>

                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_project_users_table"
                >
                  <thead className="text-gray-400">
                    <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                      <th className="min-w-25px"></th>
                      <th className="min-w-80px">학원본사</th>
                      <th className="min-w-80px">지정이름</th>
                      <th className="min-w-100px">사용자ID</th>
                      <th className="min-w-100px">대표계정</th>
                      <th className="min-w-80px">사용여부</th>
                      <th className="min-w-100px text-end pe-5">입력일</th>
                    </tr>
                  </thead>

                  <tbody className="fw-semibold text-gray-600">
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            1
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">겨울신록</td>
                      <td data-order="Invalid date">동백1호</td>
                      <td className="text-muted fw-semibold">shinrok01</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            2
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">겨울신록</td>
                      <td data-order="Invalid date">동백1호</td>
                      <td className="text-muted fw-semibold">shinrok01</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            3
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">봄신록</td>
                      <td data-order="Invalid date">벚꽃1호</td>
                      <td className="text-muted fw-semibold">shinrok02</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            4
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">여름신록</td>
                      <td data-order="Invalid date">열대우림1호</td>
                      <td className="text-muted fw-semibold">shinrok03</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            3
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">봄신록</td>
                      <td data-order="Invalid date">벚꽃1호</td>
                      <td className="text-muted fw-semibold">shinrok02</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            4
                          </span>
                        </div>
                      </td>
                      <td data-order="Invalid date">여름신록</td>
                      <td data-order="Invalid date">열대우림1호</td>
                      <td className="text-muted fw-semibold">shinrok03</td>
                      <td className="text-muted fw-semibold">dongbaek01</td>
                      <td className="text-muted fw-semibold">
                        <span className="badge badge-light-success me-4">
                          사용
                        </span>
                      </td>
                      <td className="text-muted fw-semibold text-end">
                        2022-08-11
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button type="reset" hidden>
              <span ref={reset}></span>
            </button>
            <div className="card-footer d-flex justify-content-end py-6">
              <button
                type="reset"
                className="btn btn-light btn-active-light-primary me-2"
              >
                취소
              </button>
              {props.detail_num != "0" ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit_btn"
                >
                  변경사항 저장
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="submit_btn"
                >
                  추가
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Branch_detail;
