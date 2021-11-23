import { createContext, useMemo } from "react";
import { css } from "@emotion/css";

import { color, CONTENT_WIDTH, range } from "style/theme";

import Navbar from "Components/Navbar";
import Content from "Components/Content";
import useToggle from "hooks/useToggle";

export const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

function App() {
  const [open, toggle] = useToggle(false);
  const value = useMemo(()=>({open,toggle}),[open,toggle])

  return (
    <main className={app}>
      <MenuContext.Provider value={value}>
        <div className={container}>
          <Navbar />

          <Content />
        </div>
      </MenuContext.Provider>
    </main>
  );
}

export default App;

interface RangeInfo {
  maxWidth: number,
  range:string,
}

const createMedia = (info:RangeInfo) => ` 
  @media ${info.range} {
    max-width: ${info.maxWidth}px;
  }
`

const responsiveStyle = 
  Object.values(range)
  .map<RangeInfo>((range,i) =>({maxWidth: CONTENT_WIDTH[i], range})).reverse()
  .reduce((style,info) => style + createMedia(info),"");

const app = css`
  background: ${color.mainColor};
`;

const container= css`
    display: flex;
    margin: auto;

    ${responsiveStyle}
`;