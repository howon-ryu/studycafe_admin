/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useState } from "react";
import "../css/study__day_plan.css";
import styled from "@emotion/styled";
import "../css/layout.css";
import Arraylist from "./Arraylist";
import Day_report from "./Day_report";
// import "./main.css";
// import { Link } from "react-router-dom";

// import { Container } from "react-bootstrap";
const Study_day_plan = (props) => {
  let widthh = props.width;
  const [detail_num, setDetailNum] = useState("");
  return (
    <Container>
      <div
        className="study_day_plan"
        css={css`
          margin-left: ${widthh}px;
        `}
      >
        <div
          className="page-title d-flex flex-column justify-content-center flex-wrap me-3 "
          css={css`
            margin-left: 30px;
          `}
        >
          <h1
            className="page-heading d-flex text-dark fw-bold fs-2 flex-column justify-content-center my-0"
            css={css``}
          >
            지점학습현황
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <li className="breadcrumb-item text-muted">
              <a href="#" className="text-muted text-hover-primary">
                학습관리
              </a>
            </li>
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li className="breadcrumb-item text-muted">지점학습현황</li>
          </ul>
        </div>
        <div
          className="re"
          css={css`
            display: flex;
          `}
        >
          <Arraylist setDetailNum={setDetailNum} flag="office__branch_info" />
          <Day_report detail_num={detail_num} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // margin-left: 30px;

  padding-top: 20px;
`;

export default Study_day_plan;
