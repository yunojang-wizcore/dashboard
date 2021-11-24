import { FC, useContext } from "react";
import { css } from "@emotion/css";

import Header from "./Header";
import { map, range } from "utils/iter";
import { MenuContext, ThemeContext } from "App";
import { color_dark } from "style/theme";

interface ConetentProps {
  
}
 
const Conetent: FC<ConetentProps> = () => {
  const {open} = useContext(MenuContext);
  const {isDark} = useContext(ThemeContext);

  const classes = `${mainContent} ${open && 'open'}`;
  const cardClasses = `${card} ${isDark && 'dark'}`;
  const bigCardClasses = `big ${card} ${isDark && 'dark'}`;
  
  const listDiv = (l: number, className:string) => map<number, JSX.Element>((n)=><div key={n} className={className}>Test Block</div>, range(l));
  
  return (
    <div className={content}>
      <Header />

      <div className={classes}>
        <div className={row}>
          {listDiv(4, cardClasses)}
        </div>

        <div className={row}>
          {listDiv(2, bigCardClasses)}
        </div>

        <div className={row}>
          {listDiv(2, cardClasses)}
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
`;

const mainContent = css`
  transition: .2s cubic-bezier(0,0,0,1);
  
  &.open {
    margin-left: 8em;
  }
`;

const row = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

const card = css`
  min-height: 150px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: .5em;
  box-shadow: rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px;

  &.big {
    min-width: 400px;
    min-height: 300px;
  }

  &.dark {
    background: ${color_dark.block};
    color: ${color_dark.font}
  }
`;