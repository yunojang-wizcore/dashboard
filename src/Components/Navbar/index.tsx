import { css } from "@emotion/css";
import { FC } from "react";

import useToggle from "hooks/useToggle";

import NavToggleButton from "../Content/Header/Components/NavToggleButton";

interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
  const [navOpen, navToggle] = useToggle(false);

  return (
    <aside className={asideCls}>
      <div className={headerWrap}>
        <NavToggleButton isOpen={navOpen} onClick={navToggle} />
      </div>

      {/* menulist */}
    </aside>
  );
}
 
export default Navbar;

const asideCls = css`
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

const headerWrap = css`
  height: 70px;
  display: flex;
  align-items:center;
`;