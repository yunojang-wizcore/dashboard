import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { size } from "style/theme";
import { MenuContext } from "App";

interface MenuNameProps {
  name: string
}
 
const MenuName: FC<MenuNameProps> = ({name}) => {
  const { open: isOpen } = useContext(MenuContext);

  const open = isOpen ? openCls : closeCls;
  const linkCls = `${link} ${open}`;

  return (
    <div className={linkCls}>{name}</div>
  );
}
 
export default MenuName;

const link = css`
  min-height: 24px;
  font-weight: bold;
  transition: 0.1s cubic-bezier(0,0,0,1);
  overflow : hidden;

  @media (max-width :${size.labtop.min}px) {
    animation: none;
  }
`;

const openCls = css`
  width: 8em;
`;

const closeCls = css`
  width: 0;

  @media (max-width :${size.labtop.min}px) {
    transition: none;
  }
`;