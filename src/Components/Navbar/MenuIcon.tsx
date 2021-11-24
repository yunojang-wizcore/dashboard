import { css } from "@emotion/css";
import { ThemeContext } from "App";
import { FC, useContext } from "react";
import { color_dark, size } from "style/theme";

interface MenuIconProps {
  icon: any
  isOpen: boolean
}
 
const MenuIcon: FC<MenuIconProps> = ({icon, isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const dark = isDark ? 'dark' : '';
  const open = isOpen ? 'open' : '';
  const classes = `${cls} ${dark} ${open}`;
  return (
    <div className={classes}>{icon}</div>
  );
}
 
export default MenuIcon;

const cls = css`
  min-width: 21px;
  min-height: 21px;
  border-radius: 50%;
  background: #5e6e82;

  @media (max-width :${size.labtop.min}px) {
    display: none;
    
    &.open {
      display: block;
    }
  }  

  &.dark {
    background: ${color_dark.font};
  }
`