import { css } from "@emotion/css";
import { FC } from "react";

import useToggle from "hooks/useToggle";

import NavToggleButton from "../Content/Header/Components/NavToggleButton";
import MenuList from "./MenuList";

interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
  const [navOpen, navToggle] = useToggle(false);

  return (
    <aside className={asideCls}>
      <div className={headerWrap}>
        <NavToggleButton isOpen={navOpen} onClick={navToggle} />
      </div>

      <MenuList isOpen={navOpen}/>
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
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items:center;
`;