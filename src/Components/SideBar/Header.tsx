import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { MenuContext } from "App";

import SideToggleButton from "./Components/SideToggleButton";

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <div className={cls}>
      <SideToggleButton isOpen={isOpen} onClick={toggle} />
    </div>
  );
}
 
export default Header;


const cls = css`
  height: 70px;
  display: flex;
  gap: 1em;
  align-items: center;
`;
