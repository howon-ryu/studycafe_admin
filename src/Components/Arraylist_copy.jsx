import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import {
  buildEntryKey,
  buildSegTimeText,
  compareByFieldSpec,
} from "@fullcalendar/core";
import "../css/arraylist.css";
import { createSearchParams, useNavigate } from "react-router-dom";

const AcademyList = (props) => {
  const [isCheck, setCheck] = useState("2");

  const [ttext, setttext] = useState("모든학원본사");
  let [data, setdata] = useState([]);
  const [brands, setbrands] = useState([]);
  const [owners, setowners] = useState([]);
  const [branches, setbranches] = useState([]);
  const [students, setstudents] = useState([]);
  const [rooms, setrooms] = useState([]);
  const navigate = useNavigate();
  const [clickflag, setclickflag] = useState("0");
  const [groups, setgroups] = useState([]);
  useEffect(() => {
    searchBrands();
    searchowner();
    searchStudent();
    searchBranches();
    searchRooms();
    searchGroups();

    console.log("props_arr", props);
    //console.log(owners[0].id);
    //props.setDetailNum(owners[0].id);

    console.log("1");
  }, []);
  useEffect(() => {
    if (props.flag == "office__head_office") {
      if (clickflag == "0") {
        if (props.flag == "office__head_office") {
          if (brands[0] != undefined) {
            props.setDetailNum(brands[0].id);
            console.log("wpqkf", brands[0]);
          }
        }
      }
      setdata(brands);
    }
  }, [brands]);
  useEffect(() => {
    if (props.flag == "office__branch_office") {
      if (clickflag == "0") {
        if (props.flag == "office__branch_office") {
          if (owners[0] != undefined) {
            props.setDetailNum(owners[0].id);
            console.log("wpqkf", owners[0]);
          }
        }
      }
      setdata(owners);
    }
  }, [owners]);
  useEffect(() => {
    if (props.flag == "student__manage_info") {
      if (clickflag == "0") {
        if (props.flag == "student__manage_info") {
          if (students[0] != undefined) {
            props.setDetailNum(students[0].id);
            console.log("wpqkf", students[0]);
          }
        }
      }
      setdata(students);
    }
  }, [students]);
  useEffect(() => {
    if (props.flag == "office__branch_info") {
      if (clickflag == "0") {
        if (props.flag == "office__branch_info") {
          if (branches[0] != undefined) {
            props.setDetailNum(branches[0].id);
            console.log("wpqkf", branches[0]);
          }
        }
      }
      setdata(branches);
    }
  }, [branches]);
  useEffect(() => {
    if (props.flag == "Study_weekly_plan") {
      if (clickflag == "0") {
        if (props.flag == "Study_weekly_plan") {
          if (students[0] != undefined) {
            props.setDetailNum(students[0].id);
            console.log("wpqkf", students[0]);
          }
        }
      }
      setdata(students);
    }
  }, [students]);
  // useEffect(() => {
  //   searchBrands();
  //   searchowner();
  //   searchStudent();
  //   searchBranches();
  // }, [data]);
  function setText(props) {
    console.log("text", props);
    if (props == "") {
      setttext("모든학원본사");
    } else if (props == "사용") {
      setttext("사용중인학원본사");
    } else if (props == "대기") {
      setttext("대기중인학원본사");
    } else if (props == "삭제") {
      setttext("삭제된학원본사");
    }
    console.log(ttext);
  }
  function searchBrands(props) {
    let var_status = "";

    if (props == undefined) {
      var_status = "";
    } else {
      var_status = props.target[5].value;
    }
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "brands";
    axios
      .get(url_set, {
        params: {
          status: var_status,
        },
      })
      .then(function (response) {
        //setdata(response.data);
        setbrands(response.data);
        console.log("pa:", var_status);
        console.log("bra:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchRooms(props) {
    let var_status = "";

    if (props == undefined) {
      var_status = "";
    } else {
      var_status = props.target[5].value;
    }
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches/rooms";
    axios
      .get(url_set, {
        params: {
          status: var_status,
        },
      })
      .then(function (response) {
        //setdata(response.data);
        setrooms(response.data);
        console.log("pa:", var_status);
        console.log("bra:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchGroups(props) {
    let var_status = "";

    if (props == undefined) {
      var_status = "";
    } else {
      var_status = props.target[5].value;
    }
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users/groups";
    axios
      .get(url_set, {
        params: {
          status: var_status,
        },
      })
      .then(function (response) {
        //setdata(response.data);
        setgroups(response.data);
        console.log("griyooooooooooooooooooooooooooooooooooooo:", var_status);
        console.log("bra:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchStudent(props) {
    // 나중에 branch 맞춰줘야함

    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users/students";
    let var_status = "";
    let var_brandid = "";
    let var_branchid = "";
    let var_roomid = "";
    let var_groupid = "";

    if (props != undefined) {
      console.log("asdfasdfasdf:", props);

      var_brandid = props.target[0].value;
      var_branchid = props.target[2].value;
      var_roomid = props.target[3].value;
      var_groupid = props.target[4].value;
      var_status = props.target[5].value;
    }
    axios
      .get(url_set, {
        params: {
          brandId: var_brandid,
          branchId: var_branchid,
          roomId: var_roomid,
          groupId: var_groupid,
          status: var_status,
        },
      })
      .then(function (response) {
        //setdata(response.data);

        setstudents(response.data);

        console.log("studens:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchowner(props) {
    let var_status = "";
    let var_brandid = "";
    if (props != undefined) {
      console.log("props!!!!!!!!!!:", props);
      console.log("propsowner!!!!!!!!!!:", props.target[0].value);
      var_status = props.target[5].value;
      var_brandid = props.target[0].value;
    }

    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "users/" + "owners";
    axios
      .get(url_set, {
        params: {
          status: var_status,
          brandId: var_brandid,
        },
      })
      .then(function (response) {
        //setdata(response.data);

        setowners(response.data);

        console.log(response.data[0].id);
        console.log("owners:", response.data);
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function searchBranches(props) {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches";
    let var_status = "";
    let var_brandid = "";
    let var_ownerid = "";
    if (props != undefined) {
      console.log("props!!!!!!!!!!:", props);
      console.log("propsbranch!!!!!!!!!!:", props.target[5].value);
      var_status = props.target[5].value;
      var_brandid = props.target[0].value;
      var_ownerid = props.target[1].value;
    }
    axios
      .get(url_set, {
        params: {
          status: var_status,
          brandId: var_brandid,
          ownerId: var_ownerid,
        },
      })
      .then(function (response) {
        //setdata(response.data);

        setbranches(response.data);

        console.log("branches", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function addarray() {
    console.log("click");
    // 정수 0은 undefined 혹은 공백 처리 되어 문자 "0" 사용
    props.setDetailNum("0");
    // props.setheadnum("0");
  }

  function listclick(value) {
    console.log("cliL:", value);
    setclickflag("1");
    props.setDetailNum(value);
    navigate({
      search: createSearchParams({
        student: value,
      }).toString(),
    });
    // props.setheadnum(e);
  }

  return (
    <div className="arraylist">
      <div className="app-main flex-column" id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="spot_heado_container" className="d-flex flex-stack"></div>
        </div>

        <div className="col-xl-12 mb-xl-10">
          <div className="card card-flush h-xl-100 card__left">
            <div className="card-header border-0 pt-5 card_l_h">
              <ul className="nav mb-2 mb-sm-0 card__left_tab">
                <li className="nav-item m-0">
                  <a
                    className="btn btn-sm btn-icon btn-bg-light btn-primary me-4"
                    data-bs-toggle="tab"
                    onClick={addarray}
                  >
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="11.364"
                          y="20.364"
                          width="16"
                          height="2"
                          rx="1"
                          transform="rotate(-90 11.364 20.364)"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4.36396"
                          y="11.364"
                          width="16"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                      </svg>
                    </span>
                  </a>
                </li>
                <li className="nav-item m-0" hidden>
                  <button
                    className="btn btn-sm btn-icon btn-light-primary btn__wight_sq"
                    type="button"
                  >
                    <i className="bi bi-download fs-3"></i>
                  </button>
                </li>
              </ul>

              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-light-primary btn__wight_sq"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  onClick={() => {
                    if (isCheck == "2") {
                      setCheck("1");
                      console.log("is:", isCheck);
                    } else {
                      console.log("2");
                      setCheck("2");
                      console.log(isCheck);
                    }
                  }}
                >
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect
                          x="5"
                          y="5"
                          width="5"
                          height="5"
                          rx="1"
                          fill="currentColor"
                        />
                        <rect
                          x="14"
                          y="5"
                          width="5"
                          height="5"
                          rx="1"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <rect
                          x="5"
                          y="14"
                          width="5"
                          height="5"
                          rx="1"
                          fill="currentColor"
                          opacity="0.3"
                        />
                        <rect
                          x="14"
                          y="14"
                          width="5"
                          height="5"
                          rx="1"
                          fill="currentColor"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                  </span>
                </button>

                {isCheck == "1" ? (
                  <form
                    onSubmit={function (event) {
                      event.preventDefault();
                      console.log("tat:", event);
                      setText(event.target[5].value);
                      searchBrands(event);
                      searchowner(event);
                      searchBranches(event);
                      searchStudent(event);
                      setCheck("2");
                    }}
                  >
                    <div
                      className="menu menu-sub menu-sub-dropdown  menu-sub_arr  w-250px w-md-300px show"
                      data-kt-menu="true"
                      id="kt_menu_631f0553006ad"
                    >
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bold">필터 옵션</div>
                        
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        {props.flag == "office__head_office" ? (
                          <div className="mb-10" hidden>
                            <label>브랜드</label>
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                              >
                                <option value="" selected="selected">
                                  ALL
                                </option>
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div className="mb-10">
                            <label>브랜드</label>
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                              >
                                <option value="" selected="selected">
                                  ALL
                                </option>
                                {brands.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}

                        {props.flag == "office__branch_info" ? (
                          <div className="mb-10">
                            <label>원장</label>
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                              >
                                <option value="" selected="selected">
                                  ALL
                                </option>
                                {owners.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.realName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div className="mb-10" hidden>
                            <label>원장</label>
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                              >
                                <option value="" selected="selected">
                                  ALL
                                </option>
                                {owners.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.realName}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        )}
                        {props.flag == "student__manage_info" ? (
                          <div>
                            <div className="mb-10">
                              <label>지점</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {branches.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="mb-10">
                              <label>학습실</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {rooms.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="mb-10">
                              <label>관리그룹</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {groups.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div hidden>
                            <div className="mb-10">
                              <label>지점</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {branches.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="mb-10">
                              <label>학습실</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {rooms.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="mb-10">
                              <label>관리그룹</label>
                              <div>
                                <select
                                  className="form-select form-select-solid"
                                  data-kt-select2="true"
                                  data-dropdown-parent="#kt_menu_631f0553006ad"
                                  data-allow-clear="true"
                                >
                                  <option value="" selected="selected">
                                    ALL
                                  </option>
                                  {groups.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mb-10">
                          <label>상태</label>
                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-dropdown-parent="#kt_menu_631f0553006ad"
                              data-allow-clear="true"
                            >
                              <option value="" selected="selected">
                                ALL
                              </option>
                              <option value="사용">사용중인 학원본사</option>
                              <option value="대기">대기중인 학원본사</option>
                              <option value="삭제">삭제된 학원본사</option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            리셋
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                            // onClick={() => setCheck("2")}
                          >
                            적용
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                ) : null}
              </div>
            </div>

            <div className="selected__txt_wrap">
              <span className="d-flex align-items-center fs-7 fw-bold text-gray-600 mb-2 selected__txt">
                <span className="svg-icon svg-icon-6 svg-icon-gray-600 me-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.3"
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M11.9343 12.5657L9.53696 14.963C9.22669 15.2733 9.18488 15.7619 9.43792 16.1204C9.7616 16.5789 10.4211 16.6334 10.8156 16.2342L14.3054 12.7029C14.6903 12.3134 14.6903 11.6866 14.3054 11.2971L10.8156 7.76582C10.4211 7.3666 9.7616 7.42107 9.43792 7.87962C9.18488 8.23809 9.22669 8.72669 9.53696 9.03696L11.9343 11.4343C12.2467 11.7467 12.2467 12.2533 11.9343 12.5657Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                {ttext}
              </span>
            </div>
            <div className="d-flex align-items-center position-relative my-1 card_l_h_sch">
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
                data-kt-ecommerce-edit-order-filter="search"
                className="form-control form-control-solid w-100 w-lg-50 ps-14"
                placeholder="Search"
              />
            </div>
            <div className="card-body py-3">
              <div className="table-responsive">
                <table
                  id="kt_ecommerce_edit_order_product_table"
                  className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold admin_left_table"
                >
                  <thead className="fs-7 text-gray-400 text-uppercase">
                    <tr className="fw-bold text-muted">
                      <th className="ps-4 min-w-25px">NO.</th>
                      <th className="min-w-25px n_empty"></th>
                      {props.flag === "office__head_office" ? (
                        <th className="min-w-150px">지점명/대표자</th>
                      ) : props.flag === "office__branch_office" ? (
                        <th className="min-w-150px">원장명</th>
                      ) : props.flag === "student__manage_info" ? (
                        <th className="min-w-150px">학생명/학교명</th>
                      ) : props.flag === "office__branch_info" ? (
                        <th className="min-w-150px">지점명/브랜드</th>
                      ) : props.flag === "Study_weekly_plan" ? (
                        <th className="min-w-150px">학생명/학교명</th>
                      ) : null}

                      <th className="min-w-25px n_empty"></th>
                      <th className="min-w-50px text-end me-4">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, idx) => (
                      <tr
                        className={"list_" + data.id}
                        onClick={(e) => {
                          listclick(data.id);
                          console.log("ads:", data);
                        }}
                      >
                        {/* <td>{data.id}</td> */}
                        {props.flag === "office__head_office" ? (
                          <td>{idx + 1}</td>
                        ) : props.flag === "office__branch_office" ? (
                          <td>{idx + 1}</td>
                        ) : props.flag === "student__manage_info" ? (
                          <td>{idx + 1}</td>
                        ) : props.flag === "office__branch_info" ? (
                          <td>{idx + 1}</td>
                        ) : props.flag === "Study_weekly_plan" ? (
                          <td>{idx + 1}</td>
                        ) : null}

                        <td className="n_empty"></td>
                        <td className="text-muted fw-semibold">
                          <div className="d-flex flex-stack">
                            <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                              <div className="flex-grow-1 me-2">
                                {props.flag === "office__head_office" ? (
                                  <a className="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {data.name}
                                  </a>
                                ) : props.flag === "office__branch_office" ? (
                                  <a className="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {data.realName}
                                  </a>
                                ) : props.flag === "student__manage_info" ? (
                                  <a className="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {data.realName}
                                  </a>
                                ) : props.flag === "office__branch_info" ? (
                                  <a className="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {data.name}
                                  </a>
                                ) : props.flag === "Study_weekly_plan" ? (
                                  <a className="text-gray-800 text-hover-primary fs-6 fw-bold">
                                    {data.realName}
                                  </a>
                                ) : null}
                                {/* <a
                                  href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                  className="text-gray-800 text-hover-primary fs-6 fw-bold"
                                >
                                  
                                  {data.brand.name}
                                </a> */}
                                {props.flag === "office__head_office" ? (
                                  <span className="text-muted fw-semibold d-block fs-7">
                                    {data.head.realName}
                                  </span>
                                ) : props.flag === "office__branch_office" ? (
                                  <span className="text-muted fw-semibold d-block fs-7">
                                    {data.name}
                                  </span>
                                ) : props.flag === "student__manage_info" ? (
                                  <span className="text-muted fw-semibold d-block fs-7">
                                    {data.school}
                                  </span>
                                ) : props.flag === "office__branch_info" ? (
                                  <span className="text-muted fw-semibold d-block fs-7">
                                    {data.brand.name}
                                  </span>
                                ) : props.flag === "Study_weekly_plan" ? (
                                  <span className="text-muted fw-semibold d-block fs-7">
                                    {data.school}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="n_empty"></td>
                        <td className="text-end">
                          <span className="badge badge-light-success fw-bold px-4 py-3">
                            {data.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* <tbody className="fs-6">
                    <tr className="on">
                      <td>1</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                {data[0].name}
                                dd
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                김겨울
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-success fw-bold px-4 py-3">
                          사용
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                봄신록
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                박봄
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-success fw-bold px-4 py-3">
                          사용
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                여름신록
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                이여름
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-warning fw-bold px-4 py-3">
                          대기
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                가을신록
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                서가을
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-success fw-bold px-4 py-3">
                          사용
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                일반문제은행
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                윤문제
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-danger fw-bold px-4 py-3">
                          삭제
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                겨울신록
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                김겨울
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-success fw-bold px-4 py-3">
                          사용
                        </span>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>13</td>
                      <td className="n_empty"></td>
                      <td className="text-muted fw-semibold">
                        <div className="d-flex flex-stack">
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="/metronic8/demo1/../demo1/pages/user-profile/overview.html"
                                className="text-gray-800 text-hover-primary fs-6 fw-bold"
                              >
                                여름신록
                              </a>
                              <span className="text-muted fw-semibold d-block fs-7">
                                이여름
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="n_empty"></td>
                      <td className="text-end">
                        <span className="badge badge-light-warning fw-bold px-4 py-3">
                          대기
                        </span>
                      </td>
                    </tr>
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyList;
