import { FC, MouseEventHandler } from "react";
import ToggleButton from "Components/ToggleButton";

interface ToggleDarkButtonProps {
  isOpen : boolean,
  onClick : MouseEventHandler
}
 
const ToggleDarkButton: FC<ToggleDarkButtonProps> = ({onClick, isOpen:isDark}) => {
  const tempText:string = isDark ? 'day' : 'dark';
  
  return (
    <ToggleButton onClick={onClick}>
      <span>{tempText}</span>
    </ToggleButton>
  );
}
 
export default ToggleDarkButton;