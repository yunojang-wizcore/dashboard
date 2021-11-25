import { css } from "@emotion/css";
import { MenuContext, ThemeContext } from "App";
import {  FC, useContext } from "react";
import { color_dark, size } from "style/theme";

interface MenuIconProps {
  icon: any
  isOpen: boolean
}
 
const MenuIcon: FC<MenuIconProps> = ({icon: Icon, isOpen}) => {
  const {isDark} = useContext(ThemeContext);
  const {toggle} = useContext(MenuContext);

  const dark = isDark ? 'dark' : '';
  const open = isOpen ? 'open' : '';
  const classes = `${cls} ${dark} ${open}`;

  const color = isDark ? color_dark.font : '#5e6e82';

  const onClick = () => {
    if (isOpen) return;

    toggle();
  }

  return (
    <div className={classes} onClick={onClick}>
      <Icon fill={color} />
    </div>
  );
}
 
export default MenuIcon;

const cls = css`
  width: 24px;
  min-height: 24px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width :${size.labtop.min}px) {
    display: none;
    
    &.open {
      display: block;
    }
  }  
`