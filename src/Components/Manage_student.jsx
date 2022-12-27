import { css } from "@emotion/react";
import { React, useState, useRef, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
const Manage_student = (props) => {
  const reset = useRef();
  const [flag_one, setflagone] = useState("1");
  const one_click = (props) => setflagone(props);
  const [flag_two, setflagtwo] = useState("2");
  const two_click = (props) => setflagtwo(props);
  const [brands, setbrands] = useState([]);
  const [rooms, setrooms] = useState([]);
  const [rooms2, setrooms2] = useState([]);
  const [branches, setbranches] = useState([]);
  const [branches2, setbranches2] = useState([{ brand: { id: "1" }, id: "1" }]);
  const [cookies, setCookie, removeCookie] = useCookies();
  let student_num;
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
  function searchBranches_filter(props) {
    console.log("b_props", props);
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches";
    let var_status = "";
    let var_brandid = "";
    let var_ownerid = "";
    if (props != undefined) {
      var_status = props.target[6].value;
      var_brandid = props.target[0].value;
      var_ownerid = props.target[1].value;
    }
    console.log(url_set);
    console.log(var_status);
    console.log(var_brandid);
    console.log(var_ownerid);
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

        setbranches2(response.data);

        console.log("branches", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  useEffect(() => {
    searchRooms_filter_basebranch(event2);
  }, [branches2]);
  function set_brandid_onfilter(e) {
    console.log("1234", e.target.value);
    //let owner_props = {target:{0:{value:e.target.value},1:{value:""},2:{value:""},3:{value:""},4:{value:""},5:{value:""},6:{value:""}}}
    let branch_props = {
      target: {
        0: { value: e.target.value },
        1: { value: "" },
        2: { value: "" },
        3: { value: "" },
        4: { value: "" },
        5: { value: "" },
        6: { value: "" },
      },
    };
    let room_props = {
      target: {
        0: { value: e.target.value },
        1: { value: "" },
        2: { value: "" },
        3: { value: e.target.value },
        4: { value: "" },
        5: { value: "" },
        6: { value: "" },
      },
    };
    //searchowner_filter(owner_props);
    searchBranches_filter(branch_props);
    searchRooms_filter_basebranch(room_props);
    // searchRooms_filter(branch_props);
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
  function searchRooms(props) {
    const url = "https://farm01.bitlworks.co.kr/api/v1/";
    let url_set = url + "branches/rooms";

    axios
      .get(url_set)
      .then(function (response) {
        //setdata(response.data);

        setrooms(response.data);

        console.log("branches", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  function set_branch_onfilter(e) {
    console.log("1234", e.target);
    console.log("1234", e.target.value);

    let room_props = {
      target: {
        0: { value: "" },
        1: { value: "" },
        2: { value: "" },
        3: { value: e.target.value },
        4: { value: "" },
        5: { value: "" },
        6: { value: "" },
      },
    };
    let group_props = {
      target: {
        0: { value: "" },
        1: { value: "" },
        2: { value: "" },
        3: { value: e.target.value },
        4: { value: "" },
        5: { value: "" },
        6: { value: "" },
      },
    };
    console.log("1234pp", room_props);

    searchRooms_filter_basebranch(room_props);
  }
  function searchRooms_filter_basebranch(props) {
    let var_status = "";
    console.log("12344pp", props);
    if (props.target[3].value != "") {
      if (props == undefined) {
        var_status = "";
      } else {
        var_status = props.target[6].value;
      }
      const url = "https://farm01.bitlworks.co.kr/api/v1/";
      let url_set = url + "branches/" + props.target[3].value + "/rooms";
      axios
        .get(url_set, {
          params: {
            status: var_status,
          },
        })
        .then(function (response) {
          //setdata(response.data);
          setrooms2(response.data);

          console.log("rooms:", response.data);
          console.log("성공");
        })
        .catch(function (error) {
          console.log("실패");
        });
    } else {
      searchRooms_filter(event2);
    }
  }
  let event2 = {
    target: {
      0: "",
      1: "", //owner
      2: "", //manager
      3: "", // branch
      4: "", //room
      5: "", //group
      6: "", //status
    },
  };
  function searchRooms_filter(props) {
    let var_status = "";

    if (props == undefined) {
      var_status = "";
    } else {
      var_status = props.target[6].value;
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
        setrooms2(response.data);

        console.log("rooms:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }
  useEffect(() => {
    console.log("props", props);
    // setdetailnum(props.detail_num);
    student_num = props.detail_num;
    searchBrands();
    searchBranches();
    searchRooms();
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
        brand: {
          id: "",
          name: "",
          homePageUrl: "ACTIVE",
          isManagement: true,
          status: "",
          address: "",
          businessRegistrationNumber: "",
          createdAt: "",
        },
        branch: {
          id: 1,
          name: "",
          serviceDomain: "",
          businessRegistrationNumber: "",
          homePageUrl: "",
          isManagement: true,
          address: "",
          division: "",
          closedTime: {
            hour: 0,
            minute: 0,
            second: 0,
            nano: 0,
          },
          status: "",
          createdAt: "",
        },
        profileImgUrl: "",
        address: null,
        status: "",
        lastLoginAt: "",
        school: "",
        grade: "",
        room: {
          id: "",
          name: "",
        },
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
    brand: {
      id: "",
      name: "",
      homePageUrl: "",
      isManagement: true,
      status: "",
      address: "",
      businessRegistrationNumber: "",
      createdAt: "",
    },
    branch: {
      id: 1,
      name: "",
      serviceDomain: "",
      businessRegistrationNumber: "",
      homePageUrl: "",
      isManagement: true,
      address: "",
      division: "",
      closedTime: {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
      status: "",
      createdAt: "",
    },
    room: {
      id: "",
      name: "",
    },
    profileImgUrl: "",
    address: null,
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
    let url_set = url + "users/" + student_num;
    console.log("url!!!!!!!!:", url_set);
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
      // alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);
      let cu = "사용";
      let cu1 = e.target[14].checked;
      let cu2 = e.target[15].checked;
      let cu3 = e.target[16].checked;
      if (cu1 == true) {
        cu = "사용";
      } else if (cu2 == true) {
        cu = "대기";
      } else if (cu3 == true) {
        cu = "삭제";
      }
      const data_t = {
        username: e.target[3].value,
        password: e.target[4].value,
        password2: e.target[5].value,
        realName: e.target[2].value,
        gender: "남자",
        address: e.target[8].value,
        phone: e.target[6].value,
        email: e.target[7].value,
        birthDate: "1999-01-01",
        school: e.target[9].value,
        grade: e.target[10].value,
        brandId: e.target[0].value,
        branchId: e.target[1].value,
        roomId: e.target[11].value,
        seatNumber: e.target[12].value,
        status: cu,
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
      //alert(e.target[2].value);
      // event.preventDefalut();

      console.log(e);
      let cu = "사용";
      let cu1 = e.target[14].checked;
      let cu2 = e.target[15].checked;
      let cu3 = e.target[16].checked;
      if (cu1 == true) {
        cu = "사용";
      } else if (cu2 == true) {
        cu = "대기";
      } else if (cu3 == true) {
        cu = "삭제";
      }
      const data_t = {
        password: e.target[4].value,
        password2: e.target[5].value,
        realName: e.target[2].value,
        username: e.target[3].value,
        address: e.target[8].value,
        phone: e.target[6].value,
        email: e.target[7].value,
        birthDate: "1999-01-01",
        school: e.target[9].value,
        grade: e.target[10].value,
        roomId: e.target[11].value,
        seatNumber: e.target[12].value,
        status: cu,
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
          alert("저장되었습니다");
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
                    //event.preventDefault();
                    handleSubmit(event);
                  }}
                >
                  <div className="card card-flush h-xl-100 card__right">
                    <div className="card-body pt-1 card_right_body right__tab_con right__tab01_con on">
                      <div className="row mb-5">
                        <div className="col-md-6 fv-row">
                          <label>본사명</label>
                          {cookies.cookie.data.role.id == 1 ? (
                            <div>
                              {props.detail_num != "0" ? (
                                <div>
                                  <select
                                    className="form-select form-select-solid"
                                    data-kt-select2="true"
                                    data-dropdown-parent="#kt_menu_631f0553006ad"
                                    data-allow-clear="true"
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
                                </div>
                              ) : (
                                <div>
                                  <select
                                    className="form-select form-select-solid"
                                    data-kt-select2="true"
                                    data-dropdown-parent="#kt_menu_631f0553006ad"
                                    data-allow-clear="true"
                                    onChange={set_brandid_onfilter}
                                    // disabled
                                  >
                                    <option value="">
                                      본사를 선택해주세요
                                    </option>
                                    {brands.map((item, idx) => (
                                      <option key={idx} value={item.id}>
                                        {item.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div>
                              {props.detail_num != "0" ? (
                                <div>
                                  <select
                                    className="form-select form-select-solid"
                                    data-kt-select2="true"
                                    data-dropdown-parent="#kt_menu_631f0553006ad"
                                    data-allow-clear="true"
                                    disabled
                                  >
                                    <option value={data.brand.id}>
                                      {data.brand.name}
                                    </option>
                                    {/* {brands.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))} */}
                                  </select>
                                </div>
                              ) : (
                                <div>
                                  <select
                                    className="form-select form-select-solid"
                                    data-kt-select2="true"
                                    data-dropdown-parent="#kt_menu_631f0553006ad"
                                    data-allow-clear="true"
                                    onChange={set_brandid_onfilter}
                                  >
                                    <option value="">
                                      본사를 선택해주세요
                                    </option>
                                    <option
                                      value={cookies.cookie.data.brand.id}
                                    >
                                      {cookies.cookie.data.brand.name}
                                    </option>
                                    {/* {brands.map((item, idx) => (
                                    <option key={idx} value={item.id}>
                                      {item.name}
                                    </option>
                                  ))} */}
                                  </select>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 fv-row">
                          <label>지점명</label>
                          {props.detail_num != "0" ? (
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                                disabled
                              >
                                <option value={data.branch.id}>
                                  {data.branch.name}
                                </option>
                                {branches.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ) : (
                            <div>
                              <select
                                className="form-select form-select-solid"
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                                onChange={set_branch_onfilter}
                              >
                                <option value="">본사를 선택해주세요</option>
                                {branches2.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="row mb-5">
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
                          <label className="fs-5 fw-semibold mb-2">
                            아이디
                          </label>

                          <input
                            type="text"
                            className="form-control "
                            defaultValue={data.username}
                          />
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            비밀번호
                          </label>

                          <input
                            type="text"
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
                            type="text"
                            className="form-control"
                            placeholder=""
                            name=""
                          />
                        </div>
                      </div>
                      <div className="row mb-5">
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
                      </div>
                      <div className="row mb-5 ">
                        <div className="col-md-12 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            주소
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            defaultValue={data.address}
                            name=""
                          />
                        </div>
                      </div>
                      <div className="row mb-5 ">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            학교
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            defaultValue={data.school}
                            name=""
                          />
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="fs-5 fw-semibold mb-2">학년</label>

                          <select
                            className="form-select "
                            data-kt-select2="true"
                            data-dropdown-parent="#kt_menu_631f0553006ad"
                            data-allow-clear="true"
                            key={data.id}
                            defaultValue={data.grade}
                          >
                            <option value="중1">중1</option>
                            <option value="중2">중2</option>
                            <option value="중3">중3</option>
                            <option value="고1">고1</option>
                            <option value="고2">고2</option>

                            <option value="고3">고3</option>
                            {/* <option value="대학생">대학생</option> */}
                            <option value="재수">재수</option>
                            <option value="삼수">삼수</option>
                            <option value="사수">사수</option>
                            <option value="n수">n수</option>
                            <option value="공시">공시</option>
                            <option value="기타">기타</option>
                          </select>
                          {/* <input
                            type="text"
                            className="form-control "
                            defaultValue={data.grade}
                          /> */}
                        </div>
                      </div>

                      <div className="row mb-5 ">
                        <div className="col-md-6 fv-row">
                          <label className="required fs-5 fw-semibold mb-2">
                            학습관
                          </label>
                          {props.detail_num == "0" ? (
                            <div>
                              <select
                                className="form-select "
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                                defaultValue={rooms.name}
                              >
                                <option value="">학습관을 선택해주세요 </option>

                                {rooms2.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          ) : (
                            <div>
                              <select
                                className="form-select "
                                data-kt-select2="true"
                                data-dropdown-parent="#kt_menu_631f0553006ad"
                                data-allow-clear="true"
                                defaultValue={rooms.name}
                              >
                                <option value={data.room.id}>
                                  {data.room.name}{" "}
                                </option>
                                {rooms2.map((item, idx) => (
                                  <option key={idx} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 fv-row">
                          <label className="fs-5 fw-semibold mb-2">좌석</label>

                          <input
                            type="text"
                            className="form-control "
                            defaultValue={data.seatNumber}
                          />
                        </div>
                      </div>
                      <div className="row mb-5 row__line">
                        <div className="col-md-6 fv-row" hidden>
                          <label className="fs-5 fw-semibold mb-2">
                            생년월일
                          </label>

                          <input
                            type="date"
                            className="form-control "
                            defaultValue={data.birthDate}
                          />
                        </div>
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
                              defaultChecked={data.status == "사용"}
                            />
                            <label className="form-check-label">사용</label>
                          </div>
                          <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                            <input
                              className="form-check-input check__hold_input"
                              type="radio"
                              defaultValue="대기"
                              name="choice_use"
                              defaultChecked={data.status == "대기"}
                            />
                            <label className="form-check-label">대기</label>
                          </div>
                          <div className="form-check form-check-custom form-check-solid check__delet use">
                            <input
                              className="form-check-input check__delet_input"
                              type="radio"
                              defaultValue="삭제"
                              name="choice_use"
                              defaultChecked={data.status == "식제"}
                            />
                            <label className="form-check-label">삭제</label>
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
                  <label className="fs-5 fw-semibold mb-2">상태</label>

                  <div className="d-flex check__use_wrap">
                    <div className="form-check form-check-custom form-check-solid me-5 check__use">
                      <input
                        className="form-check-input check__use_input"
                        type="radio"
                        value=""
                        name="choice_use"
                        defaultChecked={data.status == "사용"}
                      />
                      <label className="form-check-label">사용</label>
                    </div>
                    <div className="form-check form-check-custom form-check-solid me-5 check__hold">
                      <input
                        className="form-check-input check__hold_input"
                        type="radio"
                        value=""
                        name="choice_use"
                        defaultChecked={data.status == "대기"}
                      />
                      <label className="form-check-label">대기</label>
                    </div>
                    <div className="form-check form-check-custom form-check-solid check__delet">
                      <input
                        className="form-check-input check__delet_input"
                        type="radio"
                        value=""
                        name="choice_use"
                        defaultChecked={data.status == "삭제"}
                      />
                      <label className="form-check-label">삭제</label>
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
