import { FC, useContext, useState } from "react";
import { css } from "@emotion/css";

import Header from "./Header";
import { map, range } from "utils/iter";
import { MenuContext, ThemeContext } from "App";
import { color_dark, size } from "style/theme";
import Theme from "types/theme";

import Switch from "./Components/Switch";

interface ConetentProps {
  
}
 
const Conetent: FC<ConetentProps> = () => {
  const { isOpen, toggle: menuToggle } = useContext(MenuContext);
  const { theme, toggle: darkToggle } = useContext(ThemeContext);

  const open = isOpen ? 'open' : '';
  const dark = theme === Theme.DARK ? 'dark' : '';

  const classes = `${mainContent} ${open}`;
  const cardClasses = `${card} ${dark}`;
  const bigCardClasses = `${cardClasses} big`;
  
  const listDiv = (l: number, className:string) => map<number, JSX.Element>((n)=>
    <div key={n} className={className}><h1>Test Block</h1></div>
  , range(l));

  const [lock, setLock] = useState(false);
  
  return (
    <div className={content}>
      <Header />

      <div className={classes}>
        <div className={row}>
          <div className={cardClasses}> 
            <div className={container}>
              <span>Menu</span>
              <Switch checked={isOpen} onClick={menuToggle} disable={lock}/>

              <span>Dark</span> 
              <Switch checked={theme===Theme.DARK} onClick={darkToggle} disable={lock}/>
            </div>

            <div className={container}>
              <span>Lock</span> <Switch checked={lock} onClick={()=>setLock(now=> !now)}/>
            </div>

          </div>

          <div className={cardClasses}></div>

          <div className={cardClasses}></div>

          <div className={cardClasses}></div>
        </div>

        <div className={row}>
          {listDiv(2, bigCardClasses)}
        </div>

        <div className={row}>
          {listDiv(2, cardClasses)}
        </div>

        <div className={row}>
          {listDiv(4, cardClasses)}
        </div>
      </div>
    </div>
  );
}
 
export default Conetent;

const content = css`
  width: 100%;
  min-height: 100vh;
  margin-left: 4em;

  @media (max-width :${size.labtop.min}px) {
    margin-left: 0;
  }  
`;

const mainContent = css`
  transition: .2s cubic-bezier(0,0,0,1);

  &.open {
    margin-left: 8em;
    
    @media (max-width :${size.labtop.min}px) {
      transition: none;
      margin-left: 0;
    } 
  }
`;

const row = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
  padding: 0 .5em;
`;

const card = css`
  min-height: 150px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: 1em 0.5em;
  box-shadow: rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px;

  @media (max-width: ${size.desktop.min}px) {
    min-width: 350px;
  }

  &>h1 {
    font-size: 17px;
    padding: .5em;
  }

  &.big {
    min-width: 400px;
    min-height: 300px;
  }

  &.dark {
    background: ${color_dark.block};
    color: ${color_dark.font}
  }
`;

const container = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;