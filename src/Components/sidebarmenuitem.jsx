import { FC } from "react";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

function SidebarMenuItem({ title, to, idx, flag, roleid }) {
  // 토글을 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);
  console.log(flag);
  flag = parseInt(flag);
  let flagg = 0;
  // console.log();
  if (roleid == 1) {
    flagg = 1;
  } else if (roleid == 2) {
    flagg = 2;
  } else if (roleid == 3) {
    flagg = 3;
  } else if (roleid == 4) {
    flagg = 4;
  }
  console.log("flag", flag);
  console.log("flagg", flagg);
  return (
    <div className="menu-item">
      {flag >= flagg ? (
        <Link className="menu-link" to={to}>
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
          <span
            className={"menu-title" + (isCheck == true ? "_active " : "")}
            onClick={() => {
              // setCheck로 state값을 변경해주자.
              // e로 상태값을 받아왔다. 클릭시 상태값은 !상태값이므로 값이 반전된다 false -> true
              setCheck((e) => !e);
            }}
          >
            {title}
          </span>
        </Link>
      ) : null}
    </div>
  );
}
// const SidebarMenuItem = ({
//   children,
//   to,
//   title,
//   app,
//   icon,
//   fontIcon,
//   hasBullet = false,
// }) => {

//   return (
//     <div className='menu-item'>
//       <Link className={clsx('menu-link without-sub', {active: true})} to={to}>
//         {hasBullet && (
//           <span className='menu-bullet'>
//             <span className='bullet bullet-dot'></span>
//           </span>
//         )}
//         {icon && app?.sidebar?.default?.menu?.iconType === 'svg' && (
//           <span className='menu-icon'>
//             {' '}
//             {/* <KTSVG path={icon} className='svg-icon-2' /> */}
//           </span>
//         )}
//         {fontIcon && app?.sidebar?.default?.menu?.iconType === 'font' && (
//           <i className={clsx('bi fs-3', fontIcon)}></i>
//         )}
//         <span className='menu-title'>{title}</span>
//       </Link>
//       {children}
//     </div>
//   )
// }

export default SidebarMenuItem;
