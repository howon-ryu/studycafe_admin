/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { compareByFieldSpec } from "@fullcalendar/core";
import "../css/branch_info.css";
const Branch_info = (props) => {
  const reset = useRef();
  const [flag_one, setflagone] = useState("1");
  const one_click = (props) => setflagone(props);
  const [flag_two, setflagtwo] = useState("2");
  const two_click = (props) => setflagtwo(props);
  const [flag_three, setflagthree] = useState("2");
  const three_click = (props) => setflagthree(props);

  const [brand_list, setbrands] = useState([]);

  useEffect(() => {
    searchGroups();
  }, [flag_two]);
  useEffect(() => {
    searchRooms();
  }, [flag_three]);
  const [groups, setgroups] = useState([]);
  const [specgroup, setspecgroup] = useState("none");
  const [specroom, setspecroom] = useState("none");
  const [rooms, setrooms] = useState([]);
  const grouopsList = groups.map((v) => (
    <tr>
      <td>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <span className="text-gray-600 text-hover-primary ms-4">{v.id}</span>
        </div>
      </td>
      <td data-order="Invalid date">{v.name}</td>
      <td data-order="Invalid date">{v.createdAt}</td>
      <td className="n_empty"></td>
      <td className="text-muted fw-semibold ">
        <span className="badge badge-light-success me-2">{v.status}</span>
      </td>
      <td data-order="Invalid date text-end">
        <button
          onClick={() => {
            one_click(() => spec_group_api(v.id));
          }}
        >
          수정
        </button>
      </td>
    </tr>
  ));
  const roomsList = rooms.map((v) => (
    <tr>
      <td>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <span className="text-gray-600 text-hover-primary ms-4">{v.id}</span>
        </div>
      </td>
      <td data-order="Invalid date">{v.name}</td>
      <td data-order="text-muted">{v.availableSeat}</td>
      <td className="n_empty"></td>
      <td className="text-muted fw-semibold ">
        <span className="badge badge-light-success me-2">{v.status}</span>
      </td>
      <td data-order="Invalid date text-end">
        <button
          onClick={() => {
            one_click(() => spec_room_api(v.id));
          }}
        >
          수정
        </button>
      </td>
    </tr>
  ));

  // id: "",
  // name: "",
  // branch: {
  //   id: "",
  //   name: "",
  //   businessRegistrationNumber: "",
  //   homePageUrl: "",
  //   isManagement: "",
  //   location: {
  //     id: "",
  //     zonecode: "",
  //     address: "",
  //     roadAddress: "",
  //     jibunAddress: "",
  //     sido: "",
  //     sigungu: "",
  //     bname: "",
  //     bname1: "",
  //     additionalInfo: ""
  //   },
  //   division: "",
  //   closedTime: {
  //     hour: 0,
  //     minute: 0,
  //     second: 0,
  //     nano: 0
  //   },
  //   status: ""
  // },
  // status: "",
  // createdAt: ""

  const [data, setdata] = useState({
    id: "",
    name: "",
    businessRegistrationNumber: "",
    homePageUrl: null,
    isManagement: false,
    location: null,
    brand: {
      id: "",
      name: "",
      status: "",
      businessRegistrationNumber: "",
    },
    owner: {
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
      darkMode: false,
    },
    manager: {
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
      darkMode: false,
    },
    division: "",
    closedTime: null,
    status: "",
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
        businessRegistrationNumber: "",
        homePageUrl: null,
        isManagement: false,
        location: null,
        brand: {
          id: "",
          name: "",
          status: "",
          businessRegistrationNumber: "",
        },
        owner: {
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
          darkMode: false,
        },
        manager: {
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
          darkMode: false,
        },
        division: "",
        closedTime: null,
        status: "",
      });
      reset.current.click();
    } else {
      detail_num = props.detail_num;
      spec_brand_Api();
      console.log(detail_num);
    }
  }, [props]);

  useEffect(() => {
    searchBrands();
  }, []);
  function searchBrands() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "brands";
    axios
      .get(url_set)
      .then(function (response) {
        setbrands(response.data);
        console.log(response.data);
        console.log("성공", brand_list);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchRooms() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches" + "/rooms";
    axios
      .get(url_set)
      .then(function (response) {
        setrooms(response.data);
        console.log(response.data);
        console.log("성공", brand_list);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
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
  function searchGroups() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users" + "/groups";
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setgroups(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
        console.log(response.data);

        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function spec_group_api(groupid) {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users" + "/groups/" + groupid;
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setspecgroup(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
        console.log(response.data);

        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function spec_room_api(roomid) {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches" + "/rooms/" + roomid;
    console.log("url:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setspecroom(response.data);
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
  const handleSubmit_forgroup = (e) => {
    // event.preventDefalut();

    console.log(e);

    const data_t = {
      name: e.target[0].value,
      status: "INACTIVE",
    };

    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);
    console.log("id:", specgroup);
    let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
    let posturl_set = posturl + "users/" + "groups/" + specgroup.id;
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
  };
  const handleSubmit_forroom = (e) => {
    // event.preventDefalut();

    console.log(e);

    const data_t = {
      name: e.target[0].value,
      availableSeat: e.target[1].value,
      status: "ACTIVE",
    };

    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);

    let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
    let posturl_set = posturl + "branches/" + "rooms/" + specroom.id;
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
  };
  const handleSubmit = (e) => {
    if (props.detail_num == "0") {
      alert(e.target[9].value);
      // event.preventDefalut();

      console.log(e);

      const data_t = {
        brandId: data.brand.id,
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
          additionalInfo: "중소기업벤쳐센터 311호",
        },
        ownerUsername: e.target[10].value,
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
        brandId: data.brand.id,
        name: e.target[3].value,
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
          additionalInfo: "중소기업벤쳐센터 311호",
        },
        ownerUsername: data.owner.username,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "branches" + "/" + data.id;
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
                className={
                  flag_one == "1"
                    ? "fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn on"
                    : "fs-4 fw-bold pb-3 border-3 border-primary cursor-pointer right__tab_btn right__tab01_btn "
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Show All"
                onClick={() => {
                  one_click("1");
                  two_click("2");
                  three_click("2");
                }}
              >
                상세정보
              </div>

              <div
                className={
                  flag_two == "1"
                    ? "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn on"
                    : "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab02_btn "
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
                onClick={() => {
                  one_click("2");
                  two_click("1");
                  three_click("2");
                }}
              >
                관리그룹
              </div>

              <div
                className={
                  flag_three == "1"
                    ? "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab03_btn on"
                    : "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab03_btn"
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
                onClick={() => {
                  one_click("2");
                  two_click("2");
                  three_click("1");
                }}
              >
                학습실
              </div>
              {/* <div
                className={
                  flag_four == "1"
                    ? "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab04_btn on"
                    : "fs-4 fw-bold text-muted pb-3 cursor-pointer right__tab_btn right__tab04_btn"
                }
                data-kt-table-widget-3="tab"
                data-kt-table-widget-3-value="Pending"
                onClick={() => {
                  one_click("2");
                  two_click("2");
                  three_click("2");
                  four_click("1");
                }}
              >
                알림톡 설정
              </div> */}
            </div>
          </div>
          {flag_one == "1" ? (
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
                          defaultValue=""
                          name="first_name"
                        />
                        <span className="me-3">.here.study</span>
                      </div>
                      <div className="col-md-6 fv-row input_50">
                        <label className="required fs-5 fw-semibold mb-2">
                          학원본사 선택
                        </label>

                        <select
                          name="position"
                          data-control="select2"
                          data-placeholder="Select a position..."
                          className="form-select form-select-solid"
                        >
                          {brand_list &&
                            brand_list.map((data) => {
                              <option>brand_list.name</option>;
                            })}
                          {/* {brand_list &&
                          brand_list.products.map((brand_list) => (
                            <option value="Web Developer">brand_list.id</option>
                          ))} */}
                        </select>
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="col-md-6 fv-row">
                        <label className="fs-5 fw-semibold mb-2">
                          운영자 이름
                        </label>

                        <input
                          type="text"
                          className="form-control "
                          defaultValue={data.owner.username || ""}
                          name="nickname"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="col-md-6 fv-row">
                        <label className="required fs-5 fw-semibold mb-2">
                          지점 이름
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          defaultValue={data.name}
                          name=""
                        />
                      </div>

                      <div className="col-md-6 fv-row">
                        <label className="fs-5 fw-semibold mb-2">
                          사업자등록증
                        </label>

                        <input
                          type="text"
                          className="form-control "
                          defaultValue={data.businessRegistrationNumber}
                          name="last_name"
                        />
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
                          readOnly
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
          ) : null}

          {flag_two == "1" ? (
            <div className="ad">
              <div className="right__tab02_table tab02 mb-20">
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
                      <th className="min-w-50px ">사용여부</th>
                      <th className="min-w-50px pe-5 text-end">관리</th>
                    </tr>
                  </thead>

                  <tbody className="fw-semibold text-gray-600">
                    {grouopsList}
                    {/* {groups&&groups.product.map((data)=>{
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <span className="text-gray-600 text-hover-primary ms-4">
                            {data.id}
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
                    
                  })} */}

                    {/* <tr>
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
                  </tr> */}
                  </tbody>
                </table>
              </div>
              {specgroup != "none" ? (
                <form
                  onSubmit={function (event) {
                    event.preventDefault();
                    handleSubmit_forgroup(event);
                  }}
                >
                  <div className="row mb-5">
                    <div className="col-md-4 fv-row">
                      <label className="required fs-5 fw-semibold mb-2">
                        관리그룹 이름
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        defaultValue={specgroup.name}
                      />
                    </div>

                    <div className="col-md-4 fv-row">
                      <label className="fs-5 fw-semibold mb-2">
                        최종수정자 ID
                      </label>

                      <input
                        type="text"
                        className="form-control "
                        defaultValue=""
                        name="last_name"
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
                  <div className="card-footer d-flex justify-content-end py-6">
                    <button
                      type="reset"
                      className="btn btn-light btn-active-light-primary me-2"
                    >
                      취소
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="submit_btn"
                    >
                      변경사항 저장
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          ) : null}

          {flag_three == "1" ? (
            <div className="ad">
              <div className="right__tab02_table tab02 mb-20">
                <select
                  name="status"
                  data-control="select2"
                  data-hide-search="true"
                  data-placeholder="Filter"
                  className="form-select form-select-solid form-select-sm fw-bold w-100px"
                >
                  <option value="1" selected="selected">
                    사용중인 학습실
                  </option>
                  <option value="2">대기중인 학습실</option>
                  <option value="3">삭제된 학습실</option>
                </select>
                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_project_users_table"
                >
                  <thead className="text-gray-400">
                    <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                      <th className="min-w-25px">NO.</th>
                      <th className="min-w-150px">학습실 이름 </th>
                      <th className="min-w-100px">좌석수</th>
                      <th className="min-w-25x n_empty"></th>
                      <th className="min-w-50px pe-5 text-end">사용여부</th>
                      <th className="min-w-50px pe-5 text-end">관리</th>
                    </tr>
                  </thead>
                  <tbody className="fw-semibold text-gray-600">
                    {roomsList}
                  </tbody>
                </table>
              </div>
              {specroom != "none" ? (
                <form
                  onSubmit={function (event) {
                    event.preventDefault();
                    handleSubmit_forroom(event);
                  }}
                >
                  <div className="row mb-5">
                    <div className="col-md-4 fv-row">
                      <label className="required fs-5 fw-semibold mb-2">
                        학습실 이름
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        defaultValue={specroom.name}
                      />
                    </div>

                    <div className="col-md-4 fv-row">
                      <label className="fs-5 fw-semibold mb-2">좌석수</label>

                      <input
                        type="text"
                        className="form-control "
                        defaultValue={specroom.availableSeat}
                        name="last_name"
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
                  <div className="card-footer d-flex justify-content-end py-6">
                    <button
                      type="reset"
                      className="btn btn-light btn-active-light-primary me-2"
                    >
                      취소
                    </button>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="submit_btn"
                    >
                      변경사항 저장
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Branch_info;
