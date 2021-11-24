import { FC, useContext } from "react";
import { css } from "@emotion/css";

import MENU_LIST from "mock/menuList";
import MenuItem from "./MenuItem";
import { size } from "style/theme";
import { ThemeContext } from "App";

interface MenuListProps {
  isOpen: boolean
}
 
const MenuList: FC<MenuListProps> = ({isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const open = isOpen ? 'open' : '';
  const dark = isDark ? 'dark' : '';
  const classes = `${list} ${open} ${dark}`;

  return (
    <ul className={classes}>
      {MENU_LIST.map((menu, i) => <MenuItem key={i} menu={menu} isOpen={isOpen}/>)}
    </ul>
  );
}
 
export default MenuList;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: calc(100vh - 70px - 1em);

  &.open {
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  &.dark::-webkit-scrollbar-thumb {
    background: #334455;
  }

  @media (max-width :${size.labtop}) {
    display: none;
  }  
`;