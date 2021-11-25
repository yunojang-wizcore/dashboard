import { FC, useContext } from "react";
import { css } from "@emotion/css";

import MENU_LIST from "mock/menuList";
import MenuName from "./MenuName";
import { ThemeContext } from "App";
import MenuIcon from "./MenuIcon";
import { color, color_dark, createMediaQuery, size } from "style/theme";

interface MenuListProps {
  isOpen: boolean
}
 
const MenuList: FC<MenuListProps> = ({isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const open = isOpen ? 'open' : '';
  const dark = isDark ? 'dark' : '';
  const classes = `${list} ${open} ${dark}`;

  return (
    <div className={classes}>
      <ul>
        {MENU_LIST.map((menu, i) => <MenuIcon key={i} icon={menu.icon} isOpen={isOpen}/>)}
      </ul>
      <ul>
        {MENU_LIST.map((menu, i) => <MenuName key={i} name={menu.name} isOpen={isOpen}/>)}
      </ul>
    </div>
  );
}
 
export default MenuList;

const height = 'calc(100vh - 70px)';
                                                                                                                                                                                                                                                                                           
const list = css`
  height: ${height};
  display: flex;
  gap: 1em;

  &.open {
    overflow-y: scroll;
  }

  &>ul {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #afbac8;
    border-radius: 10px;
  }
  &.dark::-webkit-scrollbar-thumb {
    background: #334455;
  }

  @media (max-width :${size.labtop.min}px) {
    transition: 0.2s height cubic-bezier(0,0,0,1);
    height: 0px;
    padding: 1em 0;

    &.open {
      height: ${height};
      background: ${color.main};
      opacity: 0.9;

      ${createMediaQuery((m,c)=>`
        @media (min-width: ${m}px) {
          width: ${c}px;
        }
      `)}
      
      &.dark {
        background: ${color_dark.main};
      }
    }
  }  
`;