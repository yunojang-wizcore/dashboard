import { FC, MouseEventHandler } from "react";

interface ToggleButtonProps {
  onClick: MouseEventHandler
  className?: string 
}
 
const ToggleButton: FC<ToggleButtonProps> = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
 
export default ToggleButton;