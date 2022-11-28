import React, { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import main_logo from "../assets/media/logos/default-dark.svg";
const Sidebar = (props) => {
  console.log("props:", props);
  let width = props.width;
  const [login_check, setlogin] = useState(true);
  useEffect(() => {
    console.log(window.location.pathname);
    // if (window.location.pathname == "/") {
    //   setlogin(false);
    // }
    if (window.location.pathname == "/login") {
      setlogin(false);
    }
    if (window.location.pathname == "/registration") {
      setlogin(false);
    }
  }, []);
  const [isOpen, setOpen] = useState(true);
  const [xPosition, setX] = useState(width);
  const [mar, setmar] = useState("");
  const side = useRef();

  const change_prop = () => {
    console.log(xPosition);
    setmar(width);
    console.log("mar", mar);
    props.setValue(xPosition);
  };
  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition > 0) {
      setX(0);
      setOpen(true);
      change_prop();
      console.log("open");
    } else {
      setX(width);
      setOpen(false);
      console.log("close");
      change_prop();
    }
  };
  useEffect(() => {
    toggleMenu();
  }, []);

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(width);
      await setOpen(false);
    }
  };

  // useEffect(()=> {
  //   window.addEventListener('click', handleClose);
  //   return () => {
  //     window.removeEventListener('click', handleClose);
  //   };
  // })
  // let login_check  = props.login_flag;
  if (login_check) {
    return (
      <div className={styles.container}>
        <div
          ref={side}
          className={styles.sidebar}
          style={{
            width: `${width}px`,
            height: "100%",
            transform: `translatex(${-xPosition}px)`,
          }}
        >
          <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            <a href="../studylab/Office__head_office">
              <img src={main_logo} width="120" />
            </a>
            <button onClick={() => toggleMenu()} className={styles.button}>
              {isOpen ? (
                <span className="svg-icon svg-icon-2 rotate-180">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              ) : (
                <span className="svg-icon svg-icon-2 rotate-180">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>

          <div className={styles.content}>{props.children}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default Sidebar;
