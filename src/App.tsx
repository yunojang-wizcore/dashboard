import { createContext, useEffect, useMemo } from "react";
import { css } from "@emotion/css";

import { color, color_dark, mediaQueryWidth } from "style/theme";
import { KEY_NAME, load, save } from "utils/localStorage";
import useToggle from "hooks/useToggle";

import SideBar from "Components/SideBar";
import Content from "Components/Content";
import Theme from "types/theme";

export const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

export const ThemeContext = createContext({
  theme: Theme.DAY,
  toggle: () => {},
})

function App() {
  const [open, toggle] = useToggle(false);
  const menu = useMemo(()=>({ open, toggle }),[open, toggle])
  
  const loadedTheme = load(KEY_NAME.THEME);
  const [isDark, isDarkToggle] = useToggle(loadedTheme === Theme.DARK);
  const theme = useMemo(()=>({theme: isDark ? Theme.DARK : Theme.DAY, toggle: isDarkToggle}),[isDark, isDarkToggle])
  
  useEffect(() => {
    save(KEY_NAME.THEME, isDark ? Theme.DARK : Theme.DAY);
  },[isDark])

  const classes = `${app} ${isDark && 'dark'}`

  return (
    <main className={classes}>
      <ThemeContext.Provider value={theme}>
        <MenuContext.Provider value={menu}>
          <div className={container}>
            <SideBar />

            <Content />
          </div>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;

const app = css`
  background: ${color.main};

  &.dark {
    background: ${color_dark.main};
  }
  &.dark *::selection {
    background: #f5803e;
    color: white;
  }
`;

const container= css`
  display: flex;
  margin: auto;

  ${mediaQueryWidth()}  
`;