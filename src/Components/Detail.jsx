/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { compareByFieldSpec } from "@fullcalendar/core";
const Detail = (props) => {
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
  // let [detail_num, setdetailnum] = useState([1]);
  let detail_num;
  // useEffect(() => {
  //   // setdetailnum(props.detail_num);
  //   detail_num = props.detail_num;
  //   if (detail_num == null || detail_num == "") {
  //     console.log("@@@@");
  //     detail_num = 1;
  //   }
  //   console.log(detail_num);
  //   spec_brand_Api();
  // }, []);

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
      spec_brand_Api();
      console.log(detail_num);
    }
  }, [props]);

  function spec_brand_Api() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "brands" + "/" + detail_num;
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
      });
  }
  const handles = (e) => {
    alert("kkl");
    e.preventDefalut();
  };

  const handleSubmit = (e) => {
    if (props.detail_num == "0") {
      alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        name: e.target[2].value,
        homePageUrl: "wintergreen.study",
        isManagement: false,
        businessRegistrationNumber: "123-123-123",
        status: "ACTIVE",
        head: {
          username: e.target[5].value,
          password: e.target[3].value,
          password2: e.target[4].value,
          realName: e.target[5].value,
          phone: e.target[6].value,
          email: e.target[7].value,
        },
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "brands";
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
        });
    } else {
      // alert(event.target[1].value);
      alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        name: e.target[2].value,
        homePageUrl: "wintergreen.study",
        isManagement: false,
        businessRegistrationNumber: "123-123-123",
        status: "ACTIVE",
        head: {
          password: e.target[3].value,
          password2: e.target[4].value,
          realName: e.target[5].value,
          nickname: e.target[5].value,
          phone: e.target[6].value,
          email: e.target[7].value,
        },
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "brands" + "/" + props.detail_num;
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
          console.log("re:", error.response.data);
        });
    }
  };

  return (
    <div
      className="col-xl-12 col-xxl-8 mb-5 mb-xl-10 card__right_wrap detail"
      css={css`
        flex: 1;
      `}
    >
      <form
        onSubmit={function (event) {
          //event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div className="card card-flush h-xl-100 card__right">
          <div className="card-header py-7">
            <div
              className="card-title mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0"
              data-kt-table-widget-3="tabs_nav"
            >
              <div
                className="fs-4 fw-bold pb-3 border-bottom border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn on"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Show All"
              >
                상세정보
              </div>
            </div>
          </div>

          <div className="card-body pt-1 card_right_body right__tab_con right__tab01_con on">
            <div className="row mb-5">
              <div className="col-md-6 fv-row input_50">
                <label className="required fs-5 fw-semibold mb-2">
                  학원본사 ID
                </label>

                <input
                  type="text"
                  className="form-control"
                  defaultvalue="wintergreen"
                  name="first_name"
                />
                <span className="me-3">.here.study</span>
                <button
                  type="reset"
                  data-kt-ecommerce-settings-type="cancel"
                  className="btn btn-primary"
                >
                  중복확인
                </button>
              </div>

              <div className="col-md-6 fv-row">
                <label className="required fs-5 fw-semibold mb-2">
                  학원본사 이름
                </label>

                <input
                  type="text"
                  className="form-control"
                  defaultValue={data.name}
                  name=""
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 fv-row">
                <label className="required fs-5 fw-semibold mb-2">
                  비밀번호
                </label>

                <input
                  type="password"
                  id="password"
                  className="form-control"
                  defaultValue=""
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
              <div className="col-md-6 fv-row">
                <label className="required fs-5 fw-semibold mb-2">대표자</label>

                <input
                  type="text"
                  className="form-control"
                  defaultValue={data.head.nickname || ""}
                  name=""
                />
              </div>

              <div className="col-md-6 fv-row">
                <label className="required fs-5 fw-semibold mb-2">
                  대표 연락처
                </label>

                <input
                  type="tel"
                  className="form-control "
                  defaultValue={data.head.phone || ""}
                  name=""
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">대표 이메일</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue={data.head.email || ""}
                  name="first_name"
                />
              </div>

              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">사업자등록증</label>

                <input type="text" className="form-control " name="last_name" />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-12 fv-row">
                <label className="fs-5 fw-semibold mb-2">주소</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue={data.head.location || ""}
                  name="first_name"
                />
              </div>
            </div>

            <div className="row mb-5 row__line">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">홈페이지</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue=""
                  name="wintergreen.study"
                />
              </div>

              <div className="col-md-6 fv-row check__use_wrap">
                <label className="fs-5 fw-semibold mb-2">학습관리</label>

                <div className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="same_as_billing"
                    checked={true}
                  />
                  <label className="form-check-label" htmlFor="same_as_billing">
                    학습관리 사용
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정자 ID</label>

                <input
                  type="text"
                  className="form-control form-control-solid"
                  defaultValue="wintergreen"
                  name=""
                  readOnly
                />
              </div>

              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정 일시</label>

                <input
                  type="date"
                  className="form-control form-control-solid"
                  defaultValue="2019-09-22"
                  name=""
                  readOnly
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
                      checked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="product_tax_yes"
                    >
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
                    <label
                      className="form-check-label"
                      htmlFor="product_tax_no"
                    >
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
                    <label
                      className="form-check-label"
                      htmlFor="product_tax_no"
                    >
                      삭제
                    </label>
                  </div>
                </div>
              </div>
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
              <button type="submit" className="btn btn-primary" id="submit_btn">
                변경사항 저장
              </button>
            ) : (
              <button type="submit" className="btn btn-primary" id="submit_btn">
                추가
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Detail;