import { css } from "@emotion/react";
import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
const Manage_student = (props) => {
  const reset = useRef();
  const [flag_one, setflagone] = useState("1");
  const one_click = (props) => setflagone(props);
  const [flag_two, setflagtwo] = useState("2");
  const two_click = (props) => setflagtwo(props);
  let student_num;
  useEffect(() => {
    console.log("props", props);
    // setdetailnum(props.detail_num);
    student_num = props.detail_num;
    if (props.detail_num == "" || props.detail_num == undefined) {
      console.log("공백");
    } else if (props.detail_num == "0") {
      console.log("0");
      setdata({
        id: "",
        username: "",
        realName: "",
        phone: "",
        email: "",
        birthDate: "",
        gender: "",
        nickname: "",
        profileImgUrl: "",
        location: null,
        status: "",
        lastLoginAt: "",
        school: "",
        grade: "",
        darkMode: false,
      });
      reset.current.click();
    } else {
      student_num = props.detail_num;
      if (flag_one == "1") {
        spec_student_Api();
      } else if (flag_two == "1") {
        console.log("22222");
        spec_parent_Api();
      }

      console.log(student_num);
    }
  }, [props]);
  const [data, setdata] = useState({
    id: "",
    username: "",
    realName: "",
    phone: "",
    email: "",
    birthDate: "",
    gender: "",
    nickname: "",
    profileImgUrl: "",
    location: null,
    status: "",
    lastLoginAt: "",
    school: "",
    grade: "",
    darkMode: false,
  });
  const [parent, setparent] = useState([
    {
      id: 1,
      realName: "김엄마",
      relation: "엄마",
      phone: "010-1234-5432",
      isPrimary: true,
      createdAt: "2022-11-22T22:39:41.131Z",
      status: "ACTIVE",
    },
  ]);
  const parentsList = parent.map((v) => (
    <tr>
      <td>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <span className="text-gray-600 text-hover-primary ms-4">1</span>
        </div>
      </td>
      <td data-order="Invalid date">{v.realName}</td>
      <td data-order="Invalid date">{v.relation}</td>
      <td data-order="Invalid date">{v.phone}</td>
      <td data-order="Invalid date t__center">
        <input
          className="form-check-input widget-13-check"
          type="checkbox"
          value="1"
          checked
          disabled
        />
      </td>
      <td data-order="Invalid date">{v.createdAt}</td>
      <td className="text-muted fw-semibold text-end">
        <span className="badge badge-light-success">{v.status}</span>
      </td>
    </tr>
  ));
  function spec_student_Api() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users" + "/students/" + student_num;
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
  function spec_parent_Api() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users" + "/students/" + student_num + "/parents";
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setparent(response.data);
        console.log("data:", data);
        console.log("head:", data.head);
        console.log(response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  const handleSubmit = (e) => {
    if (props.detail_num == "0") {
      alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        password: e.target[6].value,
        password2: e.target[7].value,
        realName: e.target[2].value,
        nickname: e.target[2].value,
        phone: e.target[3].value,
        email: e.target[4].value,
        school: e.target[9].value,
        grade: e.target[10].value,
        brandId: e.target[0].value,
        branchId: e.target[1].value,
        username: e.target[2].value,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "users" + "/students";
      console.log("puturl:", posturl_set);
      // setTimeout(console.log("puturl:", posturl_set), 30000);

      axios
        .post(posturl_set, data_t, config)
        .then((response) => {
          alert("추가가 완료 되었습니다");
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
        password: e.target[5].value,
        password2: e.target[6].value,
        realName: e.target[2].value,

        phone: e.target[3].value,
        email: e.target[4].value,
        school: e.target[7].value,
        grade: e.target[8].value,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "users/students/" + data.id;
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
    <div className="manage_student">
      <div className="col-xl-12  mb-5 mb-xl-10 card__right_wrap">
        <div className="card card-flush h-xl-100 card__right">
          <div className="card-header py-7">
            <div
              className="card-title mb-0 gap-4 gap-lg-8 gap-xl-10 nav nav-tabs border-bottom-0"
              data-kt-table-widget-3="tabs_nav"
            >
              <div
                className={
                  flag_one == "1"
                    ? "fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn on"
                    : "fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn"
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Show All"
                onClick={() => {
                  one_click("1");
                  two_click("2");
                }}
              >
                상세정보
              </div>

              <div
                className={
                  flag_two == "1"
                    ? "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn on"
                    : "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn"
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
                onClick={() => {
                  one_click("2");
                  two_click("1");
                }}
                hidden
              >
                학부모정보
              </div>
            </div>
          </div>
          {flag_one == "1" ? (
            <div className="student_detail">
              <div className="col-xl-12 mb-5 mb-xl-10 card__right_wrap">
                <form
                  onSubmit={function (event) {
                    event.preventDefault();
                    handleSubmit(event);
                  }}
                >
                  <div className="card card-flush h-xl-100 card__right">
                    <div className="card-body pt-1 card_right_body right__tab_con right__tab01_con on">
                      <div className="row mb-5">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            본사
                          </label>
                          <select
                            name="position"
                            data-control="select2"
                            data-placeholder="Select a position..."
                            className="form-select form-select-solid"
                          >
                            <option value="1">겨울신록</option>
                            <option value="2">봄신록</option>
                            <option value="3">여름신록</option>
                            <option value="4">가을신록</option>
                          </select>
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            지점
                          </label>
                          <select
                            name="position"
                            data-control="select2"
                            data-placeholder="Select a position..."
                            className="form-select form-select-solid"
                          >
                            <option value="1">동탄점</option>
                            <option value="2">행신점</option>
                            <option value="3">지점1</option>
                          </select>
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            이름
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={data.realName}
                            name=""
                          />
                        </div>

                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            전화번호
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            defaultValue={data.phone}
                            name=""
                          />
                        </div>
                      </div>

                      <div className="row mb-5">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            이메일
                          </label>

                          <input
                            type="email"
                            className="form-control"
                            defaultValue={data.email}
                          />
                        </div>

                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            거주지
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            defaultValue={data.location}
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

                      <div className="row mb-5 row__line">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            학습관/좌석
                          </label>

                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholer=""
                            disabled
                          />
                        </div>

                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            학교
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder={data.school}
                            name=""
                          />
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="fs-5 fw-semibold mb-2">학년</label>

                          <input
                            type="text"
                            className="form-control form-control-solid"
                            defaultValue={data.grade}
                          />
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="fs-5 fw-semibold mb-2">
                            생년월일
                          </label>

                          <input
                            type="text"
                            className="form-control form-control-solid"
                            defaultValue={data.birthDate}
                            readOnly
                          />
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
          ) : null}
          {flag_two == "1" ? (
            <div className="card-body pt-1 card_right_body right__tab_con right__tab02_con on">
              <div className="right__tab02_table tab02 mb-20">
                <select
                  name="status"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Filter"
                  className="form-select form-select-solid form-select-sm fw-bold w-100px"
                >
                  <option value="1" selected="selected">
                    사용중인 학부모
                  </option>
                  <option value="2">대기중인 학부모</option>
                  <option value="3">삭제된 학부모</option>
                </select>

                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_ecommerce_edit_order_product_table"
                >
                  <thead className="text-gray-400">
                    <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                      <th className="min-w-25px"></th>
                      <th className="min-w-70px">학부모명</th>
                      <th className="min-w-50px">관계</th>
                      <th className="min-w-125px">학부모 연락처</th>
                      <th className="min-w-50px">대표부모</th>
                      <th className="min-w-100px">최초 입력</th>
                      <th className="min-w-40px pe-5 text-end">사용여부</th>
                    </tr>
                  </thead>

                  <tbody className="fw-semibold text-gray-600">
                    {parentsList}
                  </tbody>
                </table>
              </div>

              <div className="row mb-5">
                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    학부모명
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value="김엄마"
                    name=""
                  />
                </div>

                <div className="col-md-6 fv-row">
                  <label className="fs-5 fw-semibold mb-2">관계</label>

                  <select
                    name="position"
                    data-control="select2"
                    data-placeholder="Select a position..."
                    className="form-select form-select-solid"
                  >
                    <option value="Web Developer">엄마</option>
                    <option value="Web Designer">아빠</option>
                    <option value="Art Director">형제/자매</option>
                    <option value="Finance Manager">기타</option>
                  </select>
                </div>
              </div>

              <div className="row mb-5 row__line">
                <div className="col-md-6 fv-row">
                  <label className="required fs-5 fw-semibold mb-2">
                    연락처
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value="010-1234-5678"
                    name=""
                  />
                </div>

                <div className="col-md-6 fv-row">
                  <label className="fs-5 fw-semibold mb-2">대표부모</label>

                  <div className="d-flex align-items-center check_box_input">
                    <input
                      className="form-check-input widget-13-check me-4"
                      type="checkbox"
                      value="1"
                      checked=""
                    />
                    <span>대표부모</span>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                {/* <div className="col-md-4 fv-row">
                  <label className="fs-5 fw-semibold mb-2">
                    최종 수정자 ID
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-solid"
                    value="wintergreen"
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
                    value="2019-09-22"
                    name=""
                    readonly
                  />
                </div> */}

                <div className="col-md-4 fv-row">
                  <label className="fs-5 fw-semibold mb-2">사용</label>

                  <div className="d-flex check__use_wrap">
                    <div className="form-check form-check-custom form-check-solid me-5 check__use">
                      <input
                        className="form-check-input check__use_input"
                        type="radio"
                        value=""
                        name="choice_use"
                        id="product_tax_yes"
                        checked="checked"
                      />
                      <label className="form-check-label" for="product_tax_yes">
                        사용
                      </label>
                    </div>
                    <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                      <input
                        className="form-check-input check__hold_input"
                        type="radio"
                        value=""
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
                        value=""
                        name="choice_use"
                      />
                      <label className="form-check-label" for="product_tax_no">
                        삭제
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end py-6">
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
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Manage_student;
