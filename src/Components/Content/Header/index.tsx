import { css } from "@emotion/css";
import { FC } from "react";

import { color, size } from "style/theme";
import useToggle from "hooks/useToggle";

import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import ToggleDarkButton from "./Components/ToggleDarkButton";

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const [isDark, toggle] = useToggle(false);

  return (
    <header className={headerCls}>
      <div className={leftPanel}>
        <div className={logoWrapper}></div>
      </div>

      <div className={rightPanel}>
        <SearchForm />
        <div className={menuCls}>
          <ToggleDarkButton isOpen={isDark} onClick={toggle} />
          <UserMenu />
        </div>
      </div>

    </header>
  );
}
 
export default Header;

const headerCls = css`
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  display: flex;
  gap: 5em;
`;

const leftPanel = css`
  display: flex;
  padding: 1em 0;
`;

const rightPanel = css`
  padding: 0.8em .5em;
  display: flex;
  flex : 1;
  justify-content: space-between;
  align-items: center;

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
