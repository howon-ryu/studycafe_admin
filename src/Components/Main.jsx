/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useEffect } from "react";

import { useCookies } from "react-cookie";
// import "./main.css";
import { Link } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
const Main = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    console.log(props);
    if (cookies != undefined) {
      console.log(cookies.cookie.data);
    }
    //window.location.reload();
  }, []);
  let widthh = props.width;
  return (
    <div
      className="tag"
      css={css`
        margin-left: ${widthh}px;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-left: 45%;
          justify-content: center;
          align-items: center;
          margin-top: 23%;
        `}
      >
        공통페이지 입니다
      </div>
    </div>
  );
};

export default Main;
