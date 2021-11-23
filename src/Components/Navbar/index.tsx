import { css } from "@emotion/css";
import { MenuContext } from "App";
import { FC, useContext } from "react";
import { color } from "style/theme";

import NavToggleButton from "../Content/Header/Components/NavToggleButton";
import MenuList from "./MenuList";

interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
  const {open, toggle} = useContext(MenuContext);

  return (
    <aside className={asideCls}>
      <div className={headerWrap}>
        <NavToggleButton isOpen={open} onClick={toggle} />
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
`;

const headerWrap = css`
  height: 70px;
  display: flex;
  align-items:center;
`;