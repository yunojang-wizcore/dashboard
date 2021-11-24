import { FC, MouseEventHandler, useContext } from "react";
import { css } from "@emotion/css";

import NavToggleIcon from "./NavToggleIcon";
import ToggleButton from "Components/ToggleButton";
import { ThemeContext } from "App";

interface NavToggleButtonProps {
  isOpen : boolean,
  onClick : MouseEventHandler
}
 
const NavToggleButton: FC<NavToggleButtonProps> = ({onClick, isOpen}) => {
  const {isDark} = useContext(ThemeContext);
  const classes = `${cls} ${isDark && 'dark'}`;

  return (
    <ToggleButton onClick={onClick}  className={classes}>
      <NavToggleIcon isOpen={isOpen}/>
    </ToggleButton>
  );
}
 
export default NavToggleButton;

const cls = css`
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 50%;
  transition:background .2s;
  &:hover {
    background: #DDE3ED;
  }
  &.dark:hover{
    background: #2b3757;
  }

  &:active {
    box-shadow: inset 0px 0px 5px 0px rgba(50,50,50,0.5);
  }
`;