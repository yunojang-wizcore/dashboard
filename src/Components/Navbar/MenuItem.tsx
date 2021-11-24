import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { color_dark } from "style/theme";
import { ThemeContext } from "App";

interface MenuItemProps {
  menu:any
  isOpen:boolean
}
 
const MenuItem: FC<MenuItemProps> = ({menu, isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const dark = isDark ? 'dark' : '';
  const iconCls = `${icon} ${dark}`;
  const linkCls = `${link} ${dark}`;

  return (
    <div className={item}>
      <div className={iconCls}></div>

      {isOpen && <div className={linkCls}>{menu.name}</div>}
    </div>
  );
}
 
export default MenuItem;

const item = css`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const icon = css`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: #5e6e82;

  &.dark {
    background: ${color_dark.font};
  }
`
const link = css`
  width: 8em;
  transform-origin: left;
  animation: .2s slide cubic-bezier(0,0,0,1);
  cursor: pointer;
  color: #5e6e82;

  &.dark {
    color: ${color_dark.font};
  }
`;