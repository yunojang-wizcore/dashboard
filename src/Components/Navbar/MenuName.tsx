import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { color_dark, size } from "style/theme";
import { ThemeContext } from "App";

interface MenuNameProps {
  name:string
  isOpen:boolean
}
 
const MenuName: FC<MenuNameProps> = ({name, isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const dark = isDark ? 'dark' : '';
  const open = isOpen ? 'open' : '';
  const linkCls = `${link} ${dark} ${open}`;

  if (!isOpen) return null;

  return (
    <div className={linkCls}>{name}</div>
  );
}
 
export default MenuName;

const link = css`
  width: 8em;
  transform-origin: left;
  animation: .1s slideX cubic-bezier(0,0,0,1);
  color: #5e6e82;
  font-weight: bold;

  &.dark {
    color: ${color_dark.font};
  }

  @media (max-width :${size.labtop.min}px) {
    animation: none;
  }  
`;