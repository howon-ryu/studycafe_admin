/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useState } from "react";
import "../css/student_manage_info.css";

import styled from "@emotion/styled";
import "../css/layout.css";
// import "./main.css";
// import { Link } from "react-router-dom";
import Arraylist from "./Arraylist";
import Manage_student from "./Manage_student";
// import { Container } from "react-bootstrap";
const Student__manage_info = (props) => {
  const [detail_num, setDetailNum] = useState("");
  let widthh = props.width;
  return (
    <Container>
      <div
        className="student_manage_info"
        css={css`
          margin-left: ${widthh}px;
        `}
      >
        <div
          className="page-title d-flex flex-column justify-content-center flex-wrap me-3 "
          css={css`
            margin: 30px 0;
          `}
        >
          <h1
            className="page-heading d-flex text-dark fw-bold fs-2 flex-column justify-content-center my-0"
            css={css``}
          >
            학원본사 관리
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <li className="breadcrumb-item text-muted">
              <a href="#" className="text-muted text-hover-primary">
                지점 관리
              </a>
            </li>
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li className="breadcrumb-item text-muted">학원본사 관리</li>
          </ul>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <Arraylist setDetailNum={setDetailNum} flag="student__manage_info" />
          <Manage_student detail_num={detail_num} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  padding-top: 20px;
`;

export default Student__manage_info;
