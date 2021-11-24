import { css } from "@emotion/css";
import { FC, useContext } from "react";

import { color, color_dark, size } from "style/theme";
import { ThemeContext } from "App";

import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import ToggleDarkButton from "./Components/ToggleDarkButton";

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const {isDark, toggle} = useContext(ThemeContext);

  const dark = isDark ? 'dark' : '';
  const headerCls = `${header} ${dark}`;

  return (
    <header className={headerCls}>
      <div className={leftPanel}>
        <div className={logoWrapper}></div>
      </div>

      <div className={rightPanel}>
        <SearchForm />

        <div className={menuCls}>
          <ToggleDarkButton isDark={isDark} onClick={toggle} />
          <UserMenu />
        </div>
      </div>

    </header>
  );
}
 
export default Header;

const header = css`
  position: sticky;
  top: 0;
  height: 70px;
  width: 100%;
  display: flex;
  gap: 5em;
  background: ${color.main};

  &.dark{ 
    background: ${color_dark.main};
  }
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
  background: ${color.test};
`
