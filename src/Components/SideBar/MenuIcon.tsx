import { FC, useContext } from "react";
import { css } from "@emotion/css";

import Theme from "types/theme";
import { MenuContext, ThemeContext } from "App";
import { color, color_dark, size } from "style/theme";

interface MenuIconProps {
  Icon: any
}
 
const MenuIcon: FC<MenuIconProps> = ({Icon}) => {
  const { theme } = useContext(ThemeContext);
  const { isOpen, toggle } = useContext(MenuContext);

  const isDark = theme === Theme.DARK;
  const dark = isDark ? 'dark' : '';
  const open = isOpen ? 'open' : '';
  const classes = `${cls} ${dark} ${open}`;

  const svgFill = isDark ? color_dark.font : color.font ;

  const onClick = () => {
    if (isOpen) return;

    toggle();
  }

  return (
    <div className={classes} onClick={onClick}>
      <Icon fill={svgFill} />
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