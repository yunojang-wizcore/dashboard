import { FC } from "react";
import MENU_LIST from "mock/menuList";
import MenuItem from "./MenuItem";
import { css } from "@emotion/css";

interface MenuListProps {
  isOpen: boolean
}
 
const MenuList: FC<MenuListProps> = ({isOpen}) => {
  if (!isOpen) {
    return null
  }

  return (
    <ul className={listCls}>
      {MENU_LIST.map((menu, i) => <MenuItem key={i} menu={menu}/>)}
    </ul>
  );
}
 
export default MenuList;

const listCls = css`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @keyframes slide{
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  transform-origin: left;
  animation: .2s slide cubic-bezier(0,0,0,1);
`;