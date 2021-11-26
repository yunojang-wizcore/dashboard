import { css } from "@emotion/css";
import { FC } from "react";
import Theme from "types/theme";

interface SwitchProps {
  checked?: boolean,
  disable?: boolean,
  theme?: Theme,
  onClick?: ()=> void,
}

const Switch: FC<SwitchProps> = ({ checked = false , disable = false, theme = Theme.DAY, onClick}) => {
  const classes = `${cls} ${checked ? onCls : offCls} ${disable ? 'disable' : ''}`;

  const click = ()=> {
    if (disable) return;

    if (onClick) onClick();
  }

  return (
    <button className={classes} onClick={click}>
      <div />
    </ button>
  );
}
 
export default Switch;

const cls = css`
display: block;
  width: 50px;
  height: 18px;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;

  &>div {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.5);
    transition: 0.2s;
  }

  &.disable {
    opacity: 0.5;
  }
`;

const onCls = css`
  background: #a1bfe6;

  &>div {
    left: 100%;
    transform: translateY(-50%) translateX(-100%);
    background: #2c7be5;
  }
`;

const offCls = css`
  background: #888;

  &>div {
    left: 0;
    background: #fff;
  }
`;