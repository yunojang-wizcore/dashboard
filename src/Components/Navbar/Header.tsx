import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { MenuContext } from "App";
import { color } from "style/theme";

import NavToggleButton from "./Components/NavToggleButton";

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const {open, toggle} = useContext(MenuContext);

  return (
    <div className={cls}>
      <NavToggleButton isOpen={open} onClick={toggle} />

      <div className={logoCls}></div>
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

const logoCls = css`
  width: 100px;
  height: 38px;
  margin-right: 1.6em;
  border-radius: 6px;
  background: ${color.test};
`
