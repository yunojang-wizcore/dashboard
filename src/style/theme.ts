export const size = {
  desktop: {min:1540, content:1480},
  labtop: {min:1200, content:1140},
  tablet : {min:992, content:960},
  tabletSmall: {min:768, content:720},
  mobile: {min:576, content:540},
}

export const range = {
  desktop: `(min-width: ${size.desktop.min}px)`,
  labtop: `(min-width: ${size.labtop.min}px)`,
  tablet: `(min-width: ${size.tablet.min}px)`,
  tabletSmall: `(min-width: ${size.tabletSmall.min}px)`,
  mobile: `(min-width: ${size.mobile.min}px)`,
}

export const color = {
  main: '#edf2f9',
  test: "#2c7be5"
}

export const color_dark = {
  main : "#0b1727",
  font : "#9da9bb",
  block : "#121e2d",
}

type QueryFunc = (m:number, c:number)=>string

export const createMediaQuery = (f: QueryFunc):string => {
  return Object.values(size).reverse()
    .reduce((style, s) => style + f(s.min, s.content),"");
}