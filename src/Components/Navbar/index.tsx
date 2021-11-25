import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { MenuContext } from "App";

import MenuList from "./MenuList";
import Header from "./Header";

interface SideBarProps {}
 
const SideBar: FC<SideBarProps> = () => {
  const {open} = useContext(MenuContext);

  return (
    <aside className={asideCls}>
      <Header />

      <MenuList isOpen={open}/>
    </aside>
  );
}
 
export default SideBar;

const asideCls = css`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

