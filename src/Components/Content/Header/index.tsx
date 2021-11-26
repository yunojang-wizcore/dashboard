import { css } from "@emotion/css";
import { FC, useContext } from "react";

import { color, color_dark, size } from "style/theme";
import { ThemeContext } from "App";

import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import ToggleDarkButton from "./Components/ToggleDarkButton";
import NavHeader from 'Components/SideBar/Header'
import Theme from "types/theme";

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const dark = theme === Theme.DARK ? 'dark' : '';
  const headerCls = `${header} ${dark}`;

  return (
    <header className={headerCls}>
      <div className={tabletShow}>
        <NavHeader />
      </div>

      <div className={logoWrapper}/>
      <SearchForm />

      <div className={menuCls}>
        <ToggleDarkButton theme={theme} onClick={toggle} />
        <UserMenu />
      </div>
    </header>
  );
}
 
export default Header;

const header = css`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 0.8em 0.5em;
  opacity: 0.95;
  background: ${color.main}; 
  box-shadow: 0px 4px 5px -5px rgba(0,0,0,0.2);

  display: flex;
  align-items: center;
  z-index: 20;

  &.dark{ 
    background: ${color_dark.main};
  }
`;

const menuCls = css`
  display: flex;
  gap: 1em;
  margin-left: auto;
`;

const logoWrapper = css`
  width: 100px;
  height: 34px;
  background: ${color.test};
  border-radius: 10px;
  margin-right: 2em;
`;

const tabletShow = css`
 @media (min-width :${size.labtop.min}px) {
   display: none;
  }
`;
