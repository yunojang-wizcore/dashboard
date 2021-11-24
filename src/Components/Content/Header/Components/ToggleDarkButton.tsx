import { FC, MouseEventHandler } from "react";
import ToggleButton from "Components/ToggleButton";
import { css } from "@emotion/css";
import { color } from "style/theme";

interface ToggleDarkButtonProps {
  isDark : boolean,
  onClick : MouseEventHandler
}
 
const ToggleDarkButton: FC<ToggleDarkButtonProps> = ({onClick, isDark}) => {
  const tempText:string = isDark ? 'day' : 'dark';
  
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