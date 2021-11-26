import { css } from "@emotion/css";
import { MenuContext, ThemeContext } from "App";
import { FC, useContext } from "react";
import { color, color_dark, size } from "style/theme";

interface MenuIconProps {
  Icon: any
}
 
const MenuIcon: FC<MenuIconProps> = ({Icon}) => {
  const { isDark } = useContext(ThemeContext);
  const { open: isOpen, toggle } = useContext(MenuContext);

  const dark = isDark ? 'dark' : '';
  const open = isOpen ? 'open' : '';
  const classes = `${cls} ${dark} ${open}`;

  const fill = isDark ? color_dark.font : color.font ;

  const onClick = () => {
    if (isOpen) return;

    toggle();
  }

  return (
    <div className={classes} onClick={onClick}>
      <Icon fill={fill} />
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