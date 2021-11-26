import { FC, useContext } from "react";
import { css } from "@emotion/css";

import NoticeMenu from "./Components/NoticeDropDown";
import { ThemeContext } from "App";

interface UserMenuProps {
  
}
 
const UserMenu: FC<UserMenuProps> = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={userMenu}>
      <NoticeMenu theme={theme}/>
      <NoticeMenu theme={theme}/>
    </ul>
  );
}
 
export default UserMenu;

const userMenu = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  &>li {
    width: 1.4em;
    height: 1.4em;
    flex: 1;
  }
`;