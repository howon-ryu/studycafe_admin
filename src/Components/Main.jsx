/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import {React,useEffect} from "react";
// import "./main.css";
import { Link } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
const Main = (props) => {
  useEffect(()=>{
    console.log(props)
    //window.location.reload();
  },[])
  let widthh = props.width;
  return (
  <div className="tag"  css=
  {css`
  margin-left: ${widthh}px;
  justify-content:center;
  align-items:center;
  `}>
  main
    <div css={css`
  margin-left: ${widthh}px;
  justify-content:center;
  align-items:center;
  `}>
      메인페이지 입니다
    </div>
  </div>);
};

export default Main;