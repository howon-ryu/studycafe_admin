/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { React, useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import moment from "moment";
import { click } from "@testing-library/user-event/dist/click";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { compareByFieldSpec } from "@fullcalendar/core";
import Modal from "./Modal";
import styled from "styled-components";
import Modal_view from "./Modal_view";
import "../css/branch_info.css";
import { postGroup, postRoom } from "../remote/student/branch_info_group_room";
import { useCookies } from "react-cookie";
const Branch_info = (props) => {
  const reset = useRef();
  const [cookies, setCookie, removeCookie] = useCookies();
  let flag = 1;
  const [flag_act, setact] = useState("추가");
  const [flag_one, setflagone] = useState("1");
  const one_click = (props) => setflagone(props);
  const [flag_two, setflagtwo] = useState("2");
  const two_click = (props) => setflagtwo(props);
  const [flag_three, setflagthree] = useState("2");
  const three_click = (props) => setflagthree(props);
  const [isOpenModal, setOpenModal] = useState(false);
  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    console.log("iso", isOpenModal);

    console.log(flag);
    flag = 0;

    console.log(flag);
  }, [isOpenModal]);
  const [brands, setbrands] = useState([]);
  const [owners, setowners] = useState([]);
  const [managers, setmanagers] = useState([]);
  // const moment = require("moment");
  // const brandsList = brands.map((v) => (
  //   <option>{v.name}</option>

  // ))
  useEffect(() => {
    if (props.detail_num != "0") {
      console.log("fff");
      searchGroups();
    }
  }, [flag_two]);
  useEffect(() => {
    if (props.detail_num != "0") {
      searchRooms();
    }
  }, [flag_three]);
  const [groups, setgroups] = useState([]);
  const [specgroup, setspecgroup] = useState("none");
  const [specroom, setspecroom] = useState("none");
  const [rooms, setrooms] = useState([]);
  const handleSubmit_addGroup = (event) => {
    event.preventDefault();
    console.log(event);
    // let calenderApi = selectInfo;
    // // calenderApi.unselect()
    let modal_group_name = document.getElementById("modal_group_name").value;
    let cu = "사용";
    let cu1 = event.target[2].checked;
    let cu2 = event.target[3].checked;
    let cu3 = event.target[4].checked;
    if (cu1 == true) {
      cu = "사용";
    } else if (cu2 == true) {
      cu = "대기";
    } else if (cu3 == true) {
      cu = "삭제";
    }
    console.log(modal_group_name);
    console.log(cu);
    postGroup({
      name: modal_group_name,
      status: cu,
      branchId: props.detail_num,
    });
  };
  const handleSubmit_addRoom = (event) => {
    event.preventDefault();
    console.log(event);
    // let calenderApi = selectInfo;
    // // calenderApi.unselect()
    let modal_room_name = document.getElementById("modal_room_name").value;
    let modal_room_seat = document.getElementById("modal_room_seat").value;
    let cu = "사용";
    let cu1 = event.target[2].checked;
    let cu2 = event.target[3].checked;
    let cu3 = event.target[4].checked;
    if (cu1 == true) {
      cu = "사용";
    } else if (cu2 == true) {
      cu = "대기";
    } else if (cu3 == true) {
      cu = "삭제";
    }
    console.log(modal_room_name);
    postRoom({
      name: modal_room_name,
      status: cu,
      availableSeat: modal_room_seat,
      branchId: props.detail_num,
    });
  };
  const grouopsList = groups.map((v) => (
    <tr>
      <td>
        <div className="form-check form-check-sm form-check-custom form-check-solid">
          <span className="text-gray-600 text-hover-primary ms-4">{v.id}</span>
        </div>
      </td>
      <td data-order="Invalid date">{v.name}</td>
      <td data-order="Invalid date">{v.createdAt.substr(0, 10)}</td>
      <td className="n_empty"></td>
      <td className="text-muted fw-semibold ">
        <span className="badge badge-light-success me-2">{v.status}</span>
      </td>
      <td data-order="Invalid date text-end">
        {/* <button
          onClick={() => {
            one_click(() => spec_group_api(v.id));
          }}
        >
          수정
        </button> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setact("수정");
            spec_group_api(v.id);
            setOpenModal(!isOpenModal);
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
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setact("수정");
            spec_room_api(v.id);
            setOpenModal(!isOpenModal);
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

    address: "",

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

      profileImgUrl: "",
      address: null,
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

      profileImgUrl: "",
      address: null,
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
      one_click("1");
      two_click("2");
      three_click("2");
      setdata({
        id: "",
        name: "",
        businessRegistrationNumber: "",
        homePageUrl: null,
        isManagement: false,

        address: "",

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

          profileImgUrl: "",
          address: null,
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

          profileImgUrl: "",
          address: null,
          status: "",
          lastLoginAt: "",
          darkMode: false,
        },
        division: "",
        closedTime: null,
        status: "",
      });
      if (flag_one == "1") {
        reset.current.click();
      }
    } else {
      detail_num = props.detail_num;
      if (flag_one == "1") {
        reset.current.click();
      }
      spec_branch_Api();
      searchGroups();
      searchRooms();
      console.log(detail_num);
    }
  }, [props]);

  useEffect(() => {
    searchBrands();
    searchOwners();
    searchManager();
  }, []);
  function searchBrands() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "brands";
    axios
      .get(url_set)
      .then(function (response) {
        setbrands(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchManager() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users/manager";
    axios
      .get(url_set, {
        params: {
          brandId: props.detail_num,
          status: data.status,
        },
      })
      .then(function (response) {
        setmanagers(response.data);
        console.log("man:", response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchOwners() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users/owners";
    axios
      .get(url_set)
      .then(function (response) {
        setowners(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchRooms() {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches/" + props.detail_num + "/rooms";
    axios
      .get(url_set)
      .then(function (response) {
        setrooms(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function spec_branch_Api() {
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
    let url_set = url + "branches/" + props.detail_num + "/groups";
    console.log("urlgroup:", url_set);
    axios
      .get(url_set)
      .then(function (response) {
        setgroups(response.data);
        // console.log("data:", data);
        // console.log("head:", data.head);
        console.log("setgroup", response.data);

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
    let cu = "사용";
    let cu1 = e.target[1].checked;
    let cu2 = e.target[2].checked;
    let cu3 = e.target[3].checked;
    if (cu1 == true) {
      cu = "사용";
    } else if (cu2 == true) {
      cu = "대기";
    } else if (cu3 == true) {
      cu = "삭제";
    }
    const data_t = {
      name: e.target[0].value,
      status: cu,
    };

    const headers = { "header-name": "value" };
    const config = { headers };
    console.log("data_t", data_t);
    console.log("id:", specgroup);
    let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
    let posturl_set = posturl + "users/" + "groups/" + specgroup.id;
    console.log("puturl:", posturl_set);
    // setTimeout(console.log("puturl:", posturl_set), 30000).put
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
    let cu = "사용";
    let cu1 = e.target[2].checked;
    let cu2 = e.target[3].checked;
    let cu3 = e.target[4].checked;
    if (cu1 == true) {
      cu = "사용";
    } else if (cu2 == true) {
      cu = "대기";
    } else if (cu3 == true) {
      cu = "삭제";
    }
    const data_t = {
      name: e.target[0].value,
      availableSeat: e.target[1].value,
      status: cu,
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
      //alert(e.target[2].value);
      //e.preventDefalut();

      console.log("e", e);

      const data_t = {
        brandId: e.target[0].value,
        name: e.target[2].value,
        homePageUrl: "new.branch.study",
        isManagement: false,
        businessRegistrationNumber: e.target[3].value,
        status: e.target[6].value,
        managerId: e.target[5].value,
        address: e.target[4].value,
        ownerId: e.target[1].value,
      };

      const headers = { "header-name": "value" };
      const config = { headers };
      console.log("data_t", data_t);

      let posturl = "https://farm01.bitlworks.co.kr/api/v1/";
      let posturl_set = posturl + "branches";
      console.log("posturl:", posturl_set);
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
      // event.preventDefalut();

      console.log("e", e);

      const data_t = {
        brandId: e.target[0].value,
        name: e.target[2].value,
        homePageUrl: "",
        isManagement: false,
        businessRegistrationNumber: e.target[3].value,
        status: data.status,
        address: e.target[4].value,
        managerId: e.target[5].value,
        ownerId: e.target[1].value,
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
                  flag_two == "1" && props.detail_num != "0"
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
                  flag_three == "1" && props.detail_num != "0"
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
                          본사
                        </label>
                        {cookies.cookie.data.role.id == 1 ? (
                          <div>
                            {props.detail_num == 0 ? (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.brand.name}
                              >
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.brand.name}
                              >
                                <option value={data.brand.id}>
                                  {data.brand.name}
                                </option>
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        ) : (
                          <div>
                            {props.detail_num == 0 ? (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.brand.name}
                                disabled
                              >
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.brand.name}
                                disabled
                              >
                                <option value={data.brand.id}>
                                  {data.brand.name}
                                </option>
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="col-md-6 fv-row">
                        <label className="fs-5 fw-semibold mb-2">원장</label>
                        {cookies.cookie.data.role.id == 1 ? (
                          <div>
                            {props.detail_num == 0 ? (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                              >
                                {owners.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.realName}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                              >
                                <option value={data.owner.id}>
                                  {data.owner.realName}({data.owner.username})
                                </option>
                                {owners.map((item, idx) =>
                                  item.realName != data.owner.realName ? (
                                    <option key={idx} value={item.id}>
                                      {item.realName}({item.username} )
                                      {/* {item.id} */}
                                    </option>
                                  ) : null
                                )}
                              </select>
                            )}
                          </div>
                        ) : cookies.cookie.data.role.id == 2 ? (
                          <div>
                            {props.detail_num == 0 ? (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                              >
                                {owners.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.realName}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                              >
                                <option value={data.owner.id}>
                                  {data.owner.realName}({data.owner.username})
                                </option>
                                {owners.map((item, idx) =>
                                  item.realName != data.owner.realName ? (
                                    <option key={idx} value={item.id}>
                                      {item.realName}({item.username} )
                                      {/* {item.id} */}
                                    </option>
                                  ) : null
                                )}
                              </select>
                            )}
                          </div>
                        ) : (
                          <div>
                            {props.detail_num == 0 ? (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                                disabled
                              >
                                {owners.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.realName}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <select
                                name="position"
                                data-control="select2"
                                data-placeholder="Select a position..."
                                className="form-select form-select-solid"
                                defaultValue={data.owner.id}
                                disabled
                              >
                                <option value={data.owner.id}>
                                  {data.owner.realName}({data.owner.username})
                                </option>
                                {owners.map((item, idx) =>
                                  item.realName != data.owner.realName ? (
                                    <option key={idx} value={item.id}>
                                      {item.realName}({item.username} )
                                      {/* {item.id} */}
                                    </option>
                                  ) : null
                                )}
                              </select>
                            )}
                          </div>
                        )}
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
                          defaultValue={data.address || ""}
                          // defaultValue=""
                          name="first_name"
                        />
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
                      </div> */}
                      <div className="col-md-6 fv-row">
                        <label className="fs-5 fw-semibold mb-2">
                          매니저선택
                        </label>

                        {props.detail_num == 0 ? (
                          <select
                            name="position"
                            data-control="select2"
                            data-placeholder="Select a position..."
                            className="form-select form-select-solid"
                            defaultValue={data.manager.id}
                          >
                            {managers.map((item, idx) => (
                              <option key={idx} value={item.id}>
                                {item.realName}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <select
                            name="position"
                            data-control="select2"
                            data-placeholder="Select a position..."
                            className="form-select form-select-solid"
                            defaultValue={data.owner.id}
                          >
                            <option value={data.manager.id}>
                              {data.manager.realName}({data.manager.username})
                            </option>
                            {managers.map((item, idx) =>
                              item.realName != data.manager.realName ? (
                                <option key={idx} value={item.id}>
                                  {item.realName}({item.username})
                                </option>
                              ) : null
                            )}
                          </select>
                        )}
                      </div>

                      <div className="col-md-4 fv-row">
                        <label className="fs-5 fw-semibold mb-2">상태</label>

                        <div className="d-flex check__use_wrap">
                          <div className="form-check form-check-custom form-check-solid me-5 check__use">
                            <input
                              className="form-check-input check__use_input"
                              type="radio"
                              defaultValue="사용"
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
                              defaultValue="대기"
                              name="choice_use"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="product_tax_no"
                            >
                              대기
                            </label>
                          </div>
                          <div className="form-check form-check-custom form-check-solid check__delet use">
                            <input
                              className="form-check-input check__delet_input"
                              type="radio"
                              defaultValue="삭제"
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

          {flag_two == "1" && props.detail_num != "0" ? (
            <div className="ad">
              <div className="right__tab02_table tab02 mb-20">
                <div className="table_top">
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
                  <button
                    type="button"
                    className="btn btn-primary add_btn"
                    onClick={() => {
                      setact("추가");
                      setOpenModal(!isOpenModal);
                    }}
                  >
                    추가
                  </button>
                </div>
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
                      <th className="min-w-50px pe-5 ">관리</th>
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
            </div>
          ) : null}

          {flag_three == "1" && props.detail_num != "0" ? (
            <div className="ad">
              <div className="right__tab02_table tab02 mb-20">
                <div className="table_top">
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
                  <button
                    type="button"
                    className="btn btn-primary add_btn"
                    onClick={() => {
                      setact("추가");
                      setOpenModal(!isOpenModal);
                    }}
                  >
                    추가
                  </button>
                </div>
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
                      <th className="min-w-50px pe-5 ">사용여부</th>
                      <th className="min-w-50px pe-5 ">관리</th>
                    </tr>
                  </thead>
                  <tbody className="fw-semibold text-gray-600">
                    {roomsList}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          <Main>
            {isOpenModal && flag_two == "1" && flag_act == "추가" && (
              <Modal
                onClickToggleModal={onClickToggleModal}
                flag="office_branch_info_group"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit_addGroup} className="w-100">
                    <div className="modal-header">
                      <h2 className="fw-bold" data-kt-calendar="title">
                        관리그룹 관리
                      </h2>

                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        id="kt_modal_add_event_close"
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        관리그룹 이름
                      </label>

                      <input
                        type="text"
                        id="modal_group_name"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="modal_group_name"
                      />
                    </div>
                    <div className="d-flex check__use_wrap">
                      <div className="form-check form-check-custom form-check-solid me-5 check__use">
                        <input
                          className="form-check-input check__use_input"
                          type="radio"
                          value="사용"
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
                          value="대기"
                          name="choice_use"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="product_tax_no"
                        >
                          대기
                        </label>
                      </div>
                      <div className="form-check form-check-custom form-check-solid check__delet use">
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

                    <div className="modal-footer flex-center">
                      <button
                        type="reset"
                        id="kt_modal_add_event_cancel"
                        className="btn btn-light me-3"
                      >
                        취소
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_add_event_submit"
                        className="btn btn-primary"
                      >
                        <span
                          className="indicator-label"
                          onClick={(e) => {
                            console.log("!!!!!!!!!!!");
                            // e.preventDefault();
                          }}
                        >
                          제출
                        </span>
                        <span className="indicator-progress">
                          Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* //////////////////// */}
              </Modal>
            )}
            {isOpenModal && flag_three == "1" && flag_act == "추가" && (
              <Modal
                onClickToggleModal={onClickToggleModal}
                flag="office_branch_info_room"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit_addRoom} className="w-100">
                    <div className="modal-header">
                      <h2 className="fw-bold" data-kt-calendar="title">
                        학습실 관리
                      </h2>

                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        id="kt_modal_add_event_close"
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        학습실 이름
                      </label>

                      <input
                        type="text"
                        id="modal_room_name"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="modal_room_name"
                      />
                    </div>
                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        좌석수
                      </label>

                      <input
                        type="text"
                        id="modal_room_seat"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="modal_room_seat"
                      />
                    </div>
                    <div className="d-flex check__use_wrap">
                      <div className="form-check form-check-custom form-check-solid me-5 check__use">
                        <input
                          className="form-check-input check__use_input"
                          type="radio"
                          value="사용"
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
                          value="대기"
                          name="choice_use"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="product_tax_no"
                        >
                          대기
                        </label>
                      </div>
                      <div className="form-check form-check-custom form-check-solid check__delet use">
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

                    <div className="modal-footer flex-center">
                      <button
                        type="reset"
                        id="kt_modal_add_event_cancel"
                        className="btn btn-light me-3"
                      >
                        취소
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_add_event_submit"
                        className="btn btn-primary"
                      >
                        <span
                          className="indicator-label"
                          onClick={(e) => {
                            console.log("!!!!!!!!!!!");
                            // e.preventDefault();
                          }}
                        >
                          제출
                        </span>
                        <span className="indicator-progress">
                          Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* //////////////////// */}
              </Modal>
            )}
            {isOpenModal && flag_two == "1" && flag_act == "수정" && (
              <Modal
                onClickToggleModal={onClickToggleModal}
                flag="office_branch_info_group"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit_forgroup} className="w-100">
                    <div className="modal-header">
                      <h2 className="fw-bold" data-kt-calendar="title">
                        관리그룹 수정
                      </h2>

                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        id="kt_modal_add_event_close"
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        관리그룹 이름
                      </label>

                      <input
                        type="text"
                        id="modal_group_name"
                        className="form-control form-control-solid"
                        defaultValue={specgroup.name}
                        name="modal_group_name"
                      />
                    </div>
                    <div className="d-flex check__use_wrap">
                      <div className="form-check form-check-custom form-check-solid me-5 check__use">
                        <input
                          className="form-check-input check__use_input"
                          type="radio"
                          value="사용"
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
                          value="대기"
                          name="choice_use"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="product_tax_no"
                        >
                          대기
                        </label>
                      </div>
                      <div className="form-check form-check-custom form-check-solid check__delet use">
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

                    <div className="modal-footer flex-center">
                      <button
                        type="reset"
                        id="kt_modal_add_event_cancel"
                        className="btn btn-light me-3"
                      >
                        취소
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_add_event_submit"
                        className="btn btn-primary"
                      >
                        <span
                          className="indicator-label"
                          onClick={(e) => {
                            console.log("!!!!!!!!!!!");
                            // e.preventDefault();
                          }}
                        >
                          제출
                        </span>
                        <span className="indicator-progress">
                          Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* //////////////////// */}
              </Modal>
            )}
            {isOpenModal && flag_three == "1" && flag_act == "수정" && (
              <Modal
                onClickToggleModal={onClickToggleModal}
                flag="office_branch_info_room"
              >
                <div className="modal-content">
                  <form onSubmit={handleSubmit_forroom} className="w-100">
                    <div className="modal-header">
                      <h2 className="fw-bold" data-kt-calendar="title">
                        학습실 수정
                      </h2>

                      <div
                        className="btn btn-icon btn-sm btn-active-icon-primary"
                        id="kt_modal_add_event_close"
                      >
                        <span className="svg-icon svg-icon-1">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              opacity="0.5"
                              x="6"
                              y="17.3137"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(-45 6 17.3137)"
                              fill="currentColor"
                            />
                            <rect
                              x="7.41422"
                              y="6"
                              width="16"
                              height="2"
                              rx="1"
                              transform="rotate(45 7.41422 6)"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        학습실 이름
                      </label>

                      <input
                        type="text"
                        id="modal_room_name"
                        className="form-control form-control-solid"
                        defaultValue={specroom.name}
                        name="modal_room_name"
                      />
                    </div>
                    <div className="fv-row mb-9">
                      <label className="fs-6 fw-semibold required mb-2">
                        좌석수
                      </label>

                      <input
                        type="text"
                        id="modal_room_seat"
                        className="form-control form-control-solid"
                        defaultValue={specroom.availableSeat}
                        name="modal_room_seat"
                      />
                    </div>
                    <div className="d-flex check__use_wrap">
                      <div className="form-check form-check-custom form-check-solid me-5 check__use">
                        <input
                          className="form-check-input check__use_input"
                          type="radio"
                          value="사용"
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
                          value="대기"
                          name="choice_use"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="product_tax_no"
                        >
                          대기
                        </label>
                      </div>
                      <div className="form-check form-check-custom form-check-solid check__delet use">
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

                    <div className="modal-footer flex-center">
                      <button
                        type="reset"
                        id="kt_modal_add_event_cancel"
                        className="btn btn-light me-3"
                      >
                        취소
                      </button>

                      <button
                        type="submit"
                        id="kt_modal_add_event_submit"
                        className="btn btn-primary"
                      >
                        <span
                          className="indicator-label"
                          onClick={(e) => {
                            console.log("!!!!!!!!!!!");
                            // e.preventDefault();
                          }}
                        >
                          제출
                        </span>
                        <span className="indicator-progress">
                          Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* //////////////////// */}
              </Modal>
            )}
          </Main>
        </div>
      </div>
    </div>
  );
};
export default Branch_info;
const Main = styled.main`
  width: 10%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
