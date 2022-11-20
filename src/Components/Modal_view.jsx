import React, { PropsWithChildren } from "react";
import styled from "styled-components";

function Modal_view({ onClickToggleModal_view, children }) {
  return (
    <ModalContainer>
      <div>piu</div>
      <DialogBox>
        <div>{children}</div>
      </DialogBox>
      <Backdrop
        onClick={(e) => {
          console.log("!!!!!!!!!!!");
          e.preventDefault();

          if (onClickToggleModal_view) {
            onClickToggleModal_view();
          }
        }}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  width: 650px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  margin-bottom: 105%;
  margin-left: 40%;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin-left: 10%;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal_view;
