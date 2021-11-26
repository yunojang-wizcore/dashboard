import { FC, useRef } from "react";
import { css } from "@emotion/css";

import Theme from "types/theme";
import useDetectOusideClick from "hooks/useDetectOutsideClick";
import noticeList from 'mock/notice';
import { color, color_dark } from "style/theme";

import {ReactComponent as Icon} from 'asset/bell.svg'

interface NoticeDropDownProps {
  theme: Theme
}
 
const NoticeDropDown: FC<NoticeDropDownProps> = ({ theme }) => {
  const dropdownRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useDetectOusideClick(dropdownRef.current,false);

  const onClick = () => setIsActive(!isActive);

  const fill = theme === Theme.DARK ? color_dark.font : color.font;

  const dark = theme === Theme.DARK ? darkCls : dayCls;
  const dropDownClasses = `${dropdown} ${isActive ? 'active': 'inactive'} ${dark}`;

  return (
    <li className={container} onClick={onClick}>
      <button>
        <Icon fill={fill} x="24" y="24"/>
      </button>
      <nav ref={dropdownRef} className={dropDownClasses} >
        <ul>
          {noticeList.map((n,i)=> <li key={i}> {n.message} </li>)}
        </ul>
      </nav>
    </li>
  );
}
 
export default NoticeDropDown;

const container = css`
  position: relative;
`;

const dropdown = css`
  position: absolute;
  top: 2em;
  right: 0;
  min-width: 12em;

  border-radius: 4px;
  box-shadow: 0 1px 8px rgba(0,0,0,0.3);
  
  transition: .1s cubic-bezier(0,0,0,1);

  &.active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  &.inactive {
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: none;
  }

  li+li {
    border-top: 1px solid;
  }

  li {
    padding: 0.5em 1em;
  }
`;

const darkCls = css`
  background: ${color_dark.block};
  color: ${color_dark.font};
  border-color: ${color_dark.font};
`;

const dayCls = css`
  background: #fff;
  color: ${color.font};
  border-color: ${color.font};
`;