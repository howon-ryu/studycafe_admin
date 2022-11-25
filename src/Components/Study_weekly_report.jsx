/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";

import styled from "@emotion/styled";
import "../css/layout.css";
import Weekly_report from "./Weekly_report";
// import "./main.css";
// import { Link } from "react-router-dom";

// import { Container } from "react-bootstrap";
const Study_weekly_report = (props) => {
  let widthh = props.width;
  return (
    <Container>
      <div
        className="study_weekly_report"
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
          className="re"
          css={css`
            flex: 1;
            // margin-right: 100px;
          `}
        >
          <Weekly_report />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
`;

export default Study_weekly_report;
