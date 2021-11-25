import { FC, MouseEventHandler, useContext } from "react";
import { css } from "@emotion/css";

import SideToggleIcon from "./SideToggleIcon";
import ToggleButton from "Components/ToggleButton";
import { ThemeContext } from "App";

interface SideToggleButtonProps {
  isOpen : boolean,
  onClick : MouseEventHandler
}
 
const SideToggleButton: FC<SideToggleButtonProps> = ({onClick, isOpen}) => {
  const {isDark} = useContext(ThemeContext);
  const classes = `${cls} ${isDark && 'dark'}`;

  return (
    <ToggleButton onClick={onClick}  className={classes}>
      <SideToggleIcon isOpen={isOpen}/>
    </ToggleButton>
  );
}
 
export default SideToggleButton;

const cls = css`
  position: relative;
  left: -6px;
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