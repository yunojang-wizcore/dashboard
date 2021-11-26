import { FC, MouseEventHandler } from "react";
import { css } from "@emotion/css";

import ToggleButton from "Components/ToggleButton";
import Theme from "types/theme";
import { color } from "style/theme";

interface ToggleDarkButtonProps {
  theme : Theme
  onClick : MouseEventHandler
}
 
const ToggleDarkButton: FC<ToggleDarkButtonProps> = ({onClick, theme}) => {
  const tempText:string = theme;
  
  return (
    <ToggleButton className={cls} onClick={onClick}>
      <span>{tempText}</span>
    </ToggleButton>
  );
}
 
export default ToggleDarkButton;

const cls = css`
  color: ${color.test};
  font-weight: bold;
  font-size: 18px;
`;