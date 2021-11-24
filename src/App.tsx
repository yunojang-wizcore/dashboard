import { createContext, useEffect, useMemo } from "react";
import { css } from "@emotion/css";

import { color, color_dark, CONTENT_WIDTH, range } from "style/theme";
import { KEY_NAME, load, save } from "utils/localStorage";
import useToggle from "hooks/useToggle";

import Navbar from "Components/Navbar";
import Content from "Components/Content";

export const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

export const ThemeContext = createContext({
  isDark: false,
  toggle: () => {},
})

function App() {
  const [open, toggle] = useToggle(false);
  const loadedTheme = load(KEY_NAME.darkMode);
  const [isDark, darkToggle] = useToggle(loadedTheme);
  
  useEffect(() => {
    save(KEY_NAME.darkMode, isDark);
  },[isDark])

  const menu = useMemo(()=>({open, toggle}),[open,toggle])
  const theme = useMemo(()=>({isDark, toggle: darkToggle}),[isDark,darkToggle])

  const classes = `${app} ${isDark && 'dark'}`

  return (
    <main className={classes}>
      <ThemeContext.Provider value={theme}>
        <MenuContext.Provider value={menu}>
          <div className={container}>
            <Navbar />

            <Content />
          </div>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;

const createMedia = (info:{range:string, maxWidth:number}) => ` 
  @media ${info.range} {
    max-width: ${info.maxWidth}px;
  }
`

const responsiveStyle = 
  Object.values(range)
  .map((range,i) =>({maxWidth: CONTENT_WIDTH[i], range})).reverse()
  .reduce((style,info) => style + createMedia(info),"");

const app = css`
  background: ${color.main};

  &.dark {
    background: ${color_dark.main};
    color: ${color_dark.font};
  }
`;

const container= css`
    display: flex;
    margin: auto;

    ${responsiveStyle}
`;