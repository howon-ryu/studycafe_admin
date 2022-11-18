/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { compareByFieldSpec } from "@fullcalendar/core";




const Branch_info = (props) => {
  const reset = useRef();
  const [data, setdata] = useState({
    
      "id": "",
      "name": "",
      "businessRegistrationNumber": "",
      "homePageUrl": null,
      "isManagement": false,
      "location": null,
      "brand": {
        "id": "",
        "name": "",
        "status": "",
        "businessRegistrationNumber": ""
      },
      "owner": {
        "id": "",
        "username": "",
        "realName": "",
        "phone": "",
        "email": "",
        "birthDate": "",
        "gender": "",
        "nickname": "",
        "profileImgUrl": "",
        "location": null,
        "status": "",
        "lastLoginAt": "",
        "darkMode": false
      },
      "manager": {
        "id": "",
        "username": "",
        "realName": "",
        "phone": "",
        "email": "",
        "birthDate": "",
        "gender": "",
        "nickname": "",
        "profileImgUrl": "",
        "location": null,
        "status": "",
        "lastLoginAt": "",
        "darkMode": false
      },
      "division": "",
      "closedTime": null,
      "status": ""
    
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
    let url_set = url + "branches" + "/" + detail_num;
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setdata(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
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
      alert(e.target[9].value);
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
      let posturl_set = posturl + "branches";
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
     
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        brandId: 1,
        name: data.name,
        homePageUrl: data.homePageUrl,
        isManagement: false,
        businessRegistrationNumber: data.businessRegistrationNumber,
        status: data.status,
        // location: {
        //   zonecode: data.location.zonecode,
        //   address: data.location.address,
        //   roadAddress: data.location.roadAddress,
        //   jibunAddress: data.location.jibunAddress,
        //   sido: data.location.sido,
        //   sigungu: data.location.sigungu,
        //   bname: data.location.bname,
        //   bname1: data.location.bname1,
        //   additionalInfo: data.location.additionalInfo
        // },
        location: {
          zonecode: "12345",
          address: "경기도 고양시 덕양구 항공대학로 76",
          roadAddress: "경기도 고양시 덕양구 항공대학로 76",
          jibunAddress: "경기도 고양시 덕양구 현천동 188-8",
          sido: "경기도",
          sigungu: "고양시",
          bname: "현천동",
          bname1: "화전읍",
          additionalInfo: "중소기업벤쳐센터 311호"
        },
        ownerUsername: e.target[10].value
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "branches" + "/" + props.detail_num;
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
    <div className="branch_info">
      <div className="col-xl-12  mb-5 mb-xl-10 card__right_wrap">
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
                상세정보
              </div>

              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn "
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                관리그룹
              </div>

              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab03_btn"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                학습실
              </div>
              <div
                className="fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab04_btn"
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
              >
                알림톡 설정
              </div>
            </div>
          </div>

          <div className="card-body pt-1 card_right_body right__tab_con right__tab02_con on">
          <form
        onSubmit={function (event) {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <div className="card card-flush h-xl-100 card__right">
    

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
                  disabled
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
                  disabled
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
                  disabled
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 fv-row">
                <label className="required fs-5 fw-semibold mb-2">대표자</label>

                <input
                  type="text"
                  className="form-control"
                  defaultValue={data.owner.realName || ""}
                  disabled
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
                  defaultValue={data.owner.phone || ""}
                  name=""
                  disabled
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">대표 이메일</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue={data.owner.email || ""}
                  name="first_name"
                  disabled
                />
              </div>

              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">사업자등록증</label>

                <input type="text" className="form-control " name="last_name" disabled/>
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-12 fv-row">
                <label className="fs-5 fw-semibold mb-2">주소</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue={data.location || ""}
                  name="first_name"
                  disabled
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">운영자 이름</label>

                <input
                  type="text"
                  className="form-control "
                  defaultValue={data.manager.realName || ""}
                  name="nickname"
                />
              </div>

              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">운영자연락처</label>

                <input type="text" className="form-control " name="phone"    defaultValue={data.manager.phone || ""}/>
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
            {/* <div className="right__tab02_table tab02 mb-20">
              <select
                name="status"
                data-control="select2"
                data-hide-search="true"
                data-placeholder="Filter"
                className="form-select form-select-solid form-select-sm fw-bold w-100px"
              >
                <option value="1" selected="selected">
                  사용중인 관리그룹
                </option>
                <option value="2">대기중인 관리그룹</option>
                <option value="3">삭제된 관리그룹</option>
              </select>

              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_project_users_table"
              >
                <thead className="text-gray-400">
                  <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="min-w-25px">NO.</th>
                    <th className="min-w-150px">관리그룹 이름</th>
                    <th className="min-w-100px">등록일</th>
                    <th className="min-w-25x n_empty"></th>
                    <th className="min-w-50px pe-5 text-end">사용여부</th>
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
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
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
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
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
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
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
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          5
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          6
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          7
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재수</td>
                    <td data-order="Invalid date">2022-08-05</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-success me-2">
                        사용
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          8
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-08</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-warning me-2">
                        대기
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <span className="text-gray-600 text-hover-primary ms-4">
                          9
                        </span>
                      </div>
                    </td>
                    <td data-order="Invalid date">재학</td>
                    <td data-order="Invalid date">2022-08-24</td>
                    <td className="n_empty"></td>
                    <td className="text-muted fw-semibold text-end">
                      <span className="badge badge-light-danger me-2">
                        삭제
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row mb-5 row__line">
              <div className="col-md-6 fv-row">
                <label className="fs-5 fw-semibold mb-2">관리그룹 이름</label>

                <input
                  type="text"
                  className="form-control"
                  value="재수"
                  name=""
                />
              </div>

              <div className="col-md-6 fv-row"></div>
            </div>

            <div className="row mb-5">
              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정자 ID</label>

                <input
                  type="text"
                  className="form-control form-control-solid"
                  value="wintergreen"
                  name=""
                  readonly
                />
              </div>

              <div className="col-md-4 fv-row">
                <label className="fs-5 fw-semibold mb-2">최종 수정 일시</label>

                <input
                  type="date"
                  className="form-control form-control-solid"
                  value="2019-09-22"
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
          </div> */}

          {/* <div className="card-footer d-flex justify-content-end py-6">
            <button
              type="reset"
              className="btn btn-light btn-active-light-primary me-2"
            >
              취소
            </button>
            <button type="submit" className="btn btn-primary">
              변경사항 저장
            </button>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};
export default Branch_info;
