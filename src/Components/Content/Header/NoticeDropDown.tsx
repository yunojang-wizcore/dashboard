import { FC, useContext, useEffect, useRef } from "react";

import { color, color_dark } from "style/theme";

import { ThemeContext } from "App";
import {ReactComponent as Icon} from 'asset/bell.svg'
import useToggle from "hooks/useToggle";
import noticeList from 'mock/notice';
import { css } from "@emotion/css";

interface NoticeDropDownProps {
  
}
 
const NoticeDropDown: FC<NoticeDropDownProps> = () => {
  const dropdownRef = useRef(null);
  const [isActive, toggleActive] = useToggle(false);

  const {isDark} = useContext(ThemeContext);
  const fill = isDark ? color_dark.font : color.font;

  const onClick = () => toggleActive();

  useEffect(()=> {
    const clickEvent = (e:MouseEvent) => {
      console.log(e);
    }

    if (isActive) {
      window.addEventListener('click', clickEvent);
    }

    return () => {
      window.removeEventListener('click', clickEvent);
    }

  },[isActive])

  return (
    <li className={container}>
      <button onClick={onClick}>
        <Icon fill={fill} x="24" y="24"/>
      </button>
      <nav ref={dropdownRef} className={`${menu} ${isActive ? 'active': 'inactive'}`} >
        <ul>
          {noticeList.map((n,i)=> <li key={i}> <a href='/'>{n.message}</a> </li>)}
        </ul>
      </nav>
    </li>
  );
}
 
export default NoticeDropDown;

const container = css`
  position: relative;
`;

const menu = css`
  position: absolute;
  top: 2em;
  right: 0;
  min-width: 200px;

  visibility: hidden;
  opacity: 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.3);
  transition: .1s cubic-bezier(0,0,0,1);
  transform: translateY(-20px);

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  li+li {
    border-top: 1px solid #ddd;
  }

  li> a {
    padding: 0.5em 1em;
    display: block;
  }
`;