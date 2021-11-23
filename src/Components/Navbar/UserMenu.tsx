import { FC } from "react";
import { css } from "@emotion/css";
import { color } from "style/theme";

interface UserMenuProps {
  
}
 
const UserMenu: FC<UserMenuProps> = () => {
  return (
    <ul className={userMenu}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}
 
export default UserMenu;

const userMenu = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;

  li {
    width: 2em;
    height: 2em;
    background: ${color.testColor};
    border-radius: 50%;
    flex: 1;
  }
`;