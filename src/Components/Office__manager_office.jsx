/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

import { React, useState } from "react";
import "../css/office__branch_office.css";

import styled from "@emotion/styled";
import "../css/style.bundle.css";
// import "./main.css";
// import { Link } from "react-router-dom";
import Arraylist from "./Arraylist";
import Manager_detail from "./Manager_detail";
import "../css/layout.css";
// import { Container } from "react-bootstrap";
const Office__manager_office = (props) => {
  const [detail_num, setDetailNum] = useState("0");
  let widthh = props.width;
  return (
    <Container>
      <div
        className="office_branch_office"
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
          <h1 className="page-heading d-flex text-dark fw-bold fs-2 flex-column my-0 name_left">
            매니저관리
          </h1>
          <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
            <li className="breadcrumb-item text-muted">
              <a href="#" className="text-muted text-hover-primary">
                학원관리
              </a>
            </li>
            <li className="breadcrumb-item">
              <span className="bullet bg-gray-400 w-5px h-2px"></span>
            </li>
            <li className="breadcrumb-item text-muted">매니저관리</li>
          </ul>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <Arraylist
            setDetailNum={setDetailNum}
            flag="office__manager_office"
          />
          <Manager_detail detail_num={detail_num} />
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

export default Office__manager_office;
