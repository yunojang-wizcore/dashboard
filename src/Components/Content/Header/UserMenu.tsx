import { FC } from "react";
import { css } from "@emotion/css";

import NoticeMenu from "./NoticeDropDown";

interface UserMenuProps {
  
}
 
const UserMenu: FC<UserMenuProps> = () => {

  return (
    <ul className={userMenu}>
      <NoticeMenu />
      <NoticeMenu />
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