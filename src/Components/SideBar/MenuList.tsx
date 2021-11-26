import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { ThemeContext } from "App";
import Theme from "types/theme";
import MENU_LIST from "mock/menuList";
import { color, color_dark, mediaQueryWidth, size } from "style/theme";

import MenuIcon from "./MenuIcon";
import MenuName from "./MenuName";

interface MenuListProps {
  isOpen: boolean
}
 
const MenuList: FC<MenuListProps> = ({isOpen}) => {
  const { theme } = useContext(ThemeContext);
  
  const open = isOpen?  openCls: closeCls;
  const dark = theme === Theme.DARK ? darkCls: dayCls;
  const classes = `${open} ${dark} ${list}`;

  return (
    <nav className={classes}>
      <ul>
        {MENU_LIST.map((menu, i) => <MenuIcon key={i} Icon={menu.Icon}/>)}
      </ul>
      <ul>
        {MENU_LIST.map((menu, i) => <MenuName key={i} name={menu.name} />)}
      </ul>
    </nav>
  );
}
 
export default MenuList;

const height = 'calc(100vh - 70px)';

const list = css`
  height: ${height};
  display: flex;
  gap: 1em;
  padding: 0.4em 0;
  transition: 0.2s cubic-bezier(0,0,0,1);
  transition-property: width;

  &>ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  @media (max-width :${size.labtop.min}px) {
    ${mediaQueryWidth()}
    transition-property: height;
    opacity: 0.95;
  }  

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;

const openCls = css`
  overflow-y: scroll;

  @media (max-width :${size.labtop.min}px) {
    height: ${height};
    padding: 1em 0;
  }
`;

const closeCls = css`
  overflow-y: hidden;

  @media (max-width :${size.labtop.min}px) {
    height: 0 !important;
    padding: 0 !important;
    transition: none;
  }
`;

const dayCls = css`
  color: ${color.font};
  background: none;
  
  ::-webkit-scrollbar-thumb {
    background: #afbac8;
  }

  @media (max-width :${size.labtop.min}px) {
    background: ${color.main};
  }
`;

const darkCls = css`
  color: ${color_dark.font};
  background: none;

  ::-webkit-scrollbar-thumb {
    background: #334455;
  }

  @media (max-width :${size.labtop.min}px) {
    background: ${color_dark.main};
  }
`;
