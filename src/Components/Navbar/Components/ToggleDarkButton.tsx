import { FC, MouseEventHandler } from "react";

interface ToggleDarkButtonProps {
  isOpen : boolean,
  onClick : MouseEventHandler
}
 
const ToggleDarkButton: FC<ToggleDarkButtonProps> = ({onClick, isOpen:isDark}) => {
  const tempText:string = isDark ? 'day' : 'dark';
  
  return (
    <button onClick={onClick}>{tempText}</button>
  );
}
 
export default ToggleDarkButton;