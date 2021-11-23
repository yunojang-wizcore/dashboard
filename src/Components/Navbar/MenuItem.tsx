import { css } from "@emotion/css";
import { FC } from "react";
import { color } from "style/theme";

interface MenuItemProps {
  menu:any
}
 
const MenuItem: FC<MenuItemProps> = ({menu}) => {
  return (
    <div className={item}>
      <div className={icon}></div>

      <div>{menu.name}</div>
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
  width: 20px;
  height: 20px;
  background: ${color.testColor};
  border-radius: 50%;
`