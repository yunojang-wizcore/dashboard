import { css } from "@emotion/css";
import { FC } from "react";

import useToggle from "hooks/useToggle";

import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import NavToggleButton from "./Components/NavToggleButton";
import ToggleDarkButton from "./Components/ToggleDarkButton";

import { color, size } from "style/theme";

interface NavbarProps {}
 
const Navbar: FC<NavbarProps> = () => {
  const [navOpen, navToggle] = useToggle(false);
  const [darkOpen, darkToggle] = useToggle(false);

  return (
    <header className={headerCls}>
      <div className={LeftSection}>
        <NavToggleButton isOpen={navOpen} onClick={navToggle} />
        <div className={logoWrapper}></div>
      </div>

      <div className={rightSection}>
        <SearchForm />

        <div className={menuCls}>
          <ToggleDarkButton isOpen={darkOpen} onClick={darkToggle} />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
 
export default Navbar;

const headerCls = css`
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  gap: 5em;
`;

const LeftSection = css`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1em 0;
  gap: 1em;
`;

const rightSection = css`
  padding: 0.8em .5em;
  display: flex;
  flex : 1;
  justify-content: space-between;

  @media (max-width :${size.labtop}) {
    justify-content: flex-end;
  }  
`;

const menuCls = css`
  display: flex;
  gap: 1em;
`;

const logoWrapper = css`
  height: 100%;
  width: 100px;
  overflow: hidden;
  border-radius: 6px;
  background: ${color.testColor};
`
