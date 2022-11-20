import { FC } from "react";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

function SidebarMenuItem({ title, to }) {
  // 토글을 닫아두기 위해 초기값을 false로 설정해두었다.
  const [isCheck, setCheck] = useState(false);

  return (
    <div className="menu-item">
      <Link className="menu-link" to={to}>
        <span className="menu-bullet">
          <span className="bullet bullet-dot"></span>
        </span>
        <span class="menu-title">{title}</span>
      </Link>
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
