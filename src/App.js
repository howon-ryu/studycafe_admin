import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Calendar from "./Components/Calendar";
import Sidebar from "./Components/sidebar";
import SidebarMenu from "./Components/sidebarmenu";
import SidebarMenuItem from "./Components/sidebarmenuitem";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Office__head_office from "./Components/Office__head_office";
import Office__branch_office from "./Components/Office__branch_office";
import Office__branch_info from "./Components/Office__branch_info";
import Student__manage_info from "./Components/Student__manage_info";
import Study_weekly_plan from "./Components/Study_weekly_plan";
import Study_weekly_report from "./Components/Study_weekly_report";
import { React, useState, useEffect } from "react";
function App() {
  const [value, setValue] = useState(350);
  const [login_flag, setLoginFlag] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar width={350} setValue={setValue} loginflag={login_flag}>
          <SidebarMenu title="지점 관리" icon_num="1">
            <SidebarMenuItem title="학원본사 관리" to="/Office__head_office" />
            <SidebarMenuItem title="원장 관리" to="/Office__branch_office" />
            <SidebarMenuItem title="지점정보 관리" to="/Office__branch_info" />
          </SidebarMenu>
          <SidebarMenu title="학생 관리" icon_num="2">
            <SidebarMenuItem title="학원정보 관리" to="/Student__manage_info" />
          </SidebarMenu>
          <SidebarMenu title="학습 관리" icon_num="3">
            <SidebarMenuItem title="주간학습 계획" to="/Study_weekly_plan" />
            <SidebarMenuItem title="일일학습 계획" to="/main" />
            <SidebarMenuItem
              title="주간학습 레포트"
              to="/Study_weekly_report"
            />
          </SidebarMenu>
          <SidebarMenu title="운영 관리" icon_num="4">
            <SidebarMenuItem title="메뉴 관리" to="/main" />
            <SidebarMenuItem title="권한 관리" to="/main" />
            <SidebarMenuItem title="코드 관리" to="/main" />
          </SidebarMenu>
        </Sidebar>
        <Header width={value} loginflag={login_flag} />
        <Routes>
        <Route exact path="/" element={<Login />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
