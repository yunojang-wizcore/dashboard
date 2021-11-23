import { css } from "@emotion/css";
import { FC } from "react";
import { color } from "style/theme";

interface MenuItemProps {
  menu:any
  isOpen:boolean
}
 
const MenuItem: FC<MenuItemProps> = ({menu, isOpen}) => {
  return (
    <div className={item}>
      <div className={icon}></div>

      {isOpen && <div className={link}>{menu.name}</div>}
    </div>
  );
}
 
export default MenuItem;

const item = css`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const icon = css`
  width: 21px;
  height: 21px;
  background: ${color.testColor};
  border-radius: 50%;
`
const link = css`
  width: 8em;
  transform-origin: left;
  animation: .2s slide cubic-bezier(0,0,0,1);
  cursor: pointer;
`;