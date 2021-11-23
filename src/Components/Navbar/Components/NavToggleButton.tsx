import { FC, MouseEventHandler } from "react";
import { css } from "@emotion/css";

import NavToggleIcon from "./NavToggleIcon";

interface NavToggleButtonProps {
  isOpen : boolean,
  onClick : MouseEventHandler
}
 
const NavToggleButton: FC<NavToggleButtonProps> = ({onClick, isOpen}) => {
  return (
    <button className={buttonWrapCls} onClick={onClick}>
      <NavToggleIcon isOpen={isOpen}/>
    </button>
  );
}
 
export default NavToggleButton;

const buttonWrapCls = css`
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 50%;
  transition-duration: .2s;
  transition-property: background;
  &:hover {
    background: #DDE3ED;
  }
  &:active {
    box-shadow: inset 0px 0px 5px 0px rgba(50,50,50,0.5);
  }
`;