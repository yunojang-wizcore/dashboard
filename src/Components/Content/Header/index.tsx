import { css } from "@emotion/css";
import { FC, useContext } from "react";

import { color, color_dark, size } from "style/theme";
import { ThemeContext } from "App";

import SearchForm from "./SearchForm";
import UserMenu from "./UserMenu";
import ToggleDarkButton from "./Components/ToggleDarkButton";
import NavHeader from 'Components/Navbar/Header'

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {
  const {isDark, toggle} = useContext(ThemeContext);

  const dark = isDark ? 'dark' : '';
  const headerCls = `${header} ${dark}`;

  return (
    <header className={headerCls}>
      <div className={tabletShow}>
        <NavHeader />
      </div>

      <SearchForm />

      <div className={menuCls}>
        <ToggleDarkButton isDark={isDark} onClick={toggle} />
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
  padding-left: 11em;
  opacity: 0.95;
  background: ${color.main};

  display: flex;
  align-items: center;
  
  @media (max-width :${size.labtop.min}px) {
    padding-left: 0;
    z-index: 20;
    box-shadow: 0px 10px 5px -5px rgba(50,50,50,0.1);
  }


  &.dark{ 
    background: ${color_dark.main};
  }
`;

const menuCls = css`
  display: flex;
  gap: 1em;
  margin-left: auto;
`;

const tabletShow = css`
 @media (min-width :${size.labtop.min}px) {
   display: none;
  }
`;