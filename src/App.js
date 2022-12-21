import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Calendar_plan from "./Components/Calendar_plan";
import { useCookies } from "react-cookie";
import Sidebar from "./Components/sidebar";
import SidebarMenu from "./Components/sidebarmenu";
import SidebarMenuItem from "./Components/sidebarmenuitem";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Office__head_office from "./Components/Office__head_office";
import Office__branch_office from "./Components/Office__branch_office";
import Office__manager_office from "./Components/Office__manager_office";
import Office__branch_info from "./Components/Office__branch_info";
import Student__manage_info from "./Components/Student__manage_info";
import Study_weekly_plan from "./Components/Study_weekly_plan";
import Study_weekly_report from "./Components/Study_weekly_report";
import Study_day_plan from "./Components/Study_day_plan";
import { React, useState, useEffect } from "react";
function App() {
  const [value, setValue] = useState(265);
  let varrrr = "1";
  const [login_flag, setLoginFlag] = useState(true);
  const [roleid, setroleid] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies({
    cookie: {
      data: {
        role: {
          id: "10",
        },
      },
    },
  });

  useEffect(() => {
    console.log("1");
    console.log(cookies);
    if (cookies.cookie != undefined) {
      console.log("ck:", cookies);
      console.log("cok:", cookies.cookie.data);
      setroleid(cookies.cookie.data.role.id);
      console.log(roleid);
      console.log("riririririri", roleid);
    }
    console.log("roleid", roleid);
    //window.location.reload();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar width={265} setValue={setValue} loginflag={login_flag}>
          <SidebarMenu title="학원관리" icon_num="1">
            <SidebarMenuItem
              title="본사관리"
              to="/Office__head_office"
              idx="1"
              flag="1"
              // roleid={cookies.cookie.data.role.id || "10"}
              roleid={roleid}
            />
            <SidebarMenuItem
              title="원장관리"
              to="/Office__branch_office"
              idx="2"
              flag="2"
              roleid={roleid}
            />
            <SidebarMenuItem
              title="매니저관리"
              to="/Office__manager_office"
              idx="3"
              flag="3"
              roleid={roleid}
            />
            <SidebarMenuItem
              title="지점관리"
              to="/Office__branch_info"
              idx="4"
              flag="3.5"
              roleid={roleid}
            />
          </SidebarMenu>
          <SidebarMenu title="학생관리" icon_num="2">
            <SidebarMenuItem
              title="학생정보"
              to="/Student__manage_info"
              flag="4"
              roleid={roleid}
            />
          </SidebarMenu>
          <SidebarMenu title="학습관리" icon_num="3">
            <SidebarMenuItem
              title="학습계획"
              to="/Study_weekly_plan"
              flag="4"
              roleid={roleid}
            />
            <SidebarMenuItem
              title="학습현황"
              to="/Study_day_plan"
              flag="4"
              roleid={roleid}
            />
            <SidebarMenuItem
              title="주간레포트"
              to="/Study_weekly_report"
              flag="4"
              roleid={roleid}
            />
          </SidebarMenu>
          {/* <SidebarMenu title="운영 관리" icon_num="4" hidden>
            <SidebarMenuItem title="메뉴 관리" to="/main" />
            <SidebarMenuItem title="권한 관리" to="/main" />
            <SidebarMenuItem title="코드 관리" to="/main" />
          </SidebarMenu> */}
        </Sidebar>
        <Header width={value} loginflag={login_flag} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Login width={0} setLoginFlag={setLoginFlag} />}
          />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/main" element={<Main width={value} />} />
          <Route
            exact
            path="/login"
            element={<Login width={0} setLoginFlag={setLoginFlag} />}
          />
          <Route
            exact
            path="/Office__head_office"
            element={<Office__head_office width={value} />}
          />
          <Route
            exact
            path="/Office__branch_office"
            element={<Office__branch_office width={value} />}
          />
          <Route
            exact
            path="/Office__manager_office"
            element={<Office__manager_office width={value} />}
          />
          <Route
            exact
            path="/Office__branch_info"
            element={<Office__branch_info width={value} />}
          />
          <Route
            exact
            path="/Student__manage_info"
            element={<Student__manage_info width={value} />}
          />
          <Route
            exact
            path="/Study_weekly_plan"
            element={<Study_weekly_plan width={value} />}
          />
          <Route
            exact
            path="/Study_weekly_report"
            element={<Study_weekly_report width={value} />}
          />
          <Route
            exact
            path="/Study_day_plan"
            element={<Study_day_plan width={value} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
