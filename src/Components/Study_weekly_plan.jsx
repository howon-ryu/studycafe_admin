/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { React, useEffect, useState } from "react";
import "../css/study__weekly_plan.css";
import { useSearchParams } from "react-router-dom";

import styled from "@emotion/styled";
import "../css/layout.css";
// import "./main.css";
// import { Link } from "react-router-dom";
import Arraylist from "./Arraylist";
import Calendar_plan from "./Calendar_plan";
// import { Container } from "react-bootstrap";
const Study_weekly_plan = (props) => {
  let widthh = props.width;
  const [detail_num, setDetailNum] = useState("1");

  return (
    <Container>
      <div
        className="study_weekly_plan"
        css={css`
          margin-left: ${widthh}px;
        `}
      >
        <div
          className="page-title d-flex flex-column justify-content-center flex-wrap me-3 "
          // css={css`
          //   margin: 30px 0;
          // `}
        >
          <h1 className="page-heading d-flex text-dark fw-bold fs-2 flex-column justify-content-center my-0">
            학생학습계획
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
            <li className="breadcrumb-item text-muted">학생학습계획</li>
          </ul>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <Arraylist setDetailNum={setDetailNum} flag="Study_weekly_plan" />
          <Calendar_plan detail_num={detail_num} />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  padding-top: 20px;
`;

export default Study_weekly_plan;
