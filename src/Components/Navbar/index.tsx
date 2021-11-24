import { css } from "@emotion/css";
import { MenuContext } from "App";
import { FC, useContext } from "react";
import { color } from "style/theme";

import NavToggleButton from "./Components/NavToggleButton";
import MenuList from "./MenuList";

interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
  const {open, toggle} = useContext(MenuContext);

  return (
    <aside className={asideCls}>
      <div className={headerWrap}>
        <NavToggleButton isOpen={open} onClick={toggle} />

        <div className={logoWrapper}></div>
      </div>

      <MenuList isOpen={open}/>
    </aside>
  );
}
 
export default Navbar;

const asideCls = css`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1em;
  z-index: 5;
`;

const headerWrap = css`
  height: 70px;
  display: flex;
  gap: 1em;
  align-items: center;
`;

const logoWrapper = css`
  height: 38px;
  width: 100px;
  overflow: hidden;
  border-radius: 6px;
  background: ${color.test};
`
