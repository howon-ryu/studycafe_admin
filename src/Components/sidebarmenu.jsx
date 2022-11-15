import React, { useEffect, useRef, useState } from "react";
// import styles from "./sidebar.module.css";

import "../퍼블리싱_참고용/v0.1_1012/assets/css/style.bundle.css";
import "../퍼블리싱_참고용/v0.1_1012/assets/css/layout.css";
import "../퍼블리싱_참고용/v0.1_1012/assets/plugins/global/plugins.bundle.css";
import "../css/sidebarmenu.css";
import "../css/style.bundle.css";
function SidebarMenu({ title, children, icon_num }) {
  // 토글을 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);
  let icon_one = false;
  let icon_two = false;
  // const [icon_two, seticon_two] = useState(false);
  // const [icon_three, seticon_three] = useState(false);
  // const [icon_four, seticon_four] = useState(false);
  console.log("ic:", icon_num);
  if (icon_num == "1") {
    icon_one = true;
    icon_two = false;
    console.log(icon_one);
  }
  if (icon_num == "2") {
    icon_two = true;
    icon_one = false;
    console.log(icon_two);
  }
  //else if(icon_num=="3"){
  //   seticon_three(true);
  // }else if(icon_num=="4"){
  //   seticon_four(true);
  // }
  return (
    <>
      <div
        //간단하게 내부에 css스타일링
        style={{
          // display: "flex",
          // justifyContent: "space-between",
          // alignItems: "center",
          // padding: "10px",
          // boxSizing: "border-box",
          // backgroundColor: "181C32",
          // width: "100%",
          // height: 'auto',
          // color: "#fff"
          color: "white",
        }}
        className="menu menu-column menu-rounded menu-sub-indention px-3"
        id="#kt_app_sidebar_menu"
        data-kt-menu="true"
        data-kt-menu-expand="false"
      >
        <div
          data-kt-menu-trigger="click"
          className="menu-item here show menu-accordion"
        >
          <div className="menu-link">
            <span className="menu-icon">
              <span class="svg-icon svg-icon-2" id="one">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>

              {/* {icon_two && (
                <span class="svg-icon svg-icon-2" id="two" hidden>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                      fill="currentColor"
                    />
                    <path
                      opacity="0.3"
                      d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              )}
              <span class="menu-icon">
                <span class="svg-icon svg-icon-2" id="three" hidden>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </span>
              <span className="svg-icon svg-icon-2" id="four" hidden>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.3"
                    d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span> */}
            </span>
            <span className="menu-title"> {title}</span>
            <button
              onClick={() => {
                // setCheck로 state값을 변경해주자.
                // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
                setCheck((e) => !e);
              }}
            >
              {isCheck ? "-" : "+"}
            </button>
          </div>
          {isCheck && (
            //true
            <div class="menu-sub menu-sub-accordion">{children}</div>
          )}

          {/* <button
          onClick={() => {
            // setCheck로 state값을 변경해주자.
            // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
            setCheck((e) => !e);
          }}
        >
          
          {isCheck ? "-" : "+"}
        </button> */}
        </div>
      </div>
    </>
  );
}

// const SidebarMenu = ({
//     title,
//     hasBullet,
//     icon,
//     app,
//     fontIcon,
//     to,
//     children
//   }) => {

//     return (
//       <div
//         className={clsx('menu-item', {'here show': true}, 'menu-accordion')}
//         data-kt-menu-trigger='click'
//       >
//         <span className='menu-link'>
//           {hasBullet && (
//             <span className='menu-bullet'>
//               <span className='bullet bullet-dot'></span>
//             </span>
//           )}
//           {icon && app?.sidebar?.default?.menu?.iconType === 'svg' && (
//             <span className='menu-icon'>
//               {/* <KTSVG path={icon} className='svg-icon-2' /> */}x
//             </span>
//           )}
//           {fontIcon && app?.sidebar?.default?.menu?.iconType === 'font' && (
//             <i className={clsx('bi fs-3', fontIcon)}></i>
//           )}
//           <span className='menu-title'>{title}</span>
//           <span className='menu-arrow'></span>
//         </span>
//         <div className={clsx('menu-sub menu-sub-accordion', {'menu-active-bg': true})}>
//           {children}
//         </div>
//       </div>
//     )
//   }

export default SidebarMenu;
