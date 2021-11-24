import { FC, useContext } from "react";
import { css } from "@emotion/css";

import { map, range } from 'utils/iter';
import { ThemeContext } from "App";
import { color_dark } from "style/theme";

interface NavToggleIconProps {
  isOpen: boolean
}
 
const NavToggleIcon: FC<NavToggleIconProps> = ({isOpen}) => {
  const {isDark} = useContext(ThemeContext);

  const open = isOpen ? openCls : closeCls;
  const classes = `${defaultCls} ${open} ${isDark && 'dark'}`

  // input number, return JSX list
  const listSpan = (l: number, className:string) => map<number, JSX.Element>((n)=><span key={n} className={className}/>, range(l));

  return (  
    <div className={classes}>
      {listSpan(3, spanCls)}
    </div>
  );
}
 
export default NavToggleIcon;

const defaultCls = css`
  height: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  &.dark>span {
    background: ${color_dark.font};
  }
`;

const openCls = css`
  span {
    width: 100%;
  }
`
const closeCls = css`
  span:nth-child(1), span:nth-child(3) {
    width: 75%;
  }
  span:nth-child(2) {
    width: 55%;
  }
`

const spanCls = css`
  height: 2px;
  transition: .2s cubic-bezier(0,0,0,1);
  border-radius: 10px;
  background: #556688;
`;
