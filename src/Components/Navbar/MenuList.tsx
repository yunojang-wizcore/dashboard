import { FC } from "react";
import { css } from "@emotion/css";

import MENU_LIST from "mock/menuList";
import MenuItem from "./MenuItem";
import { size } from "style/theme";

interface MenuListProps {
  isOpen: boolean
}
 
const MenuList: FC<MenuListProps> = ({isOpen}) => {
  return (
    <ul className={listCls}>
      {MENU_LIST.map((menu, i) => <MenuItem key={i} menu={menu} isOpen={isOpen}/>)}
    </ul>
  );
}
 
export default MenuList;

const listCls = css`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width :${size.labtop}) {
    display: none;
  }  
`;