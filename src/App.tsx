import { css } from "@emotion/css";

import { color, range } from "style/theme";

import Navbar from "Components/Navbar";

function App() {
  return (
    <main className={app}>
      <div className={container}>
        <Navbar />

    
      </div>
    </main>
  );
}

export default App;

interface RangeInfo {
  maxWidth: number,
  range:string,
}

const CONTENT_WIDTH:number[] = [1480, 1140, 960, 720, 540];
const createMedia = (info:RangeInfo) => ` 
  @media ${info.range} {
    max-width: ${info.maxWidth}px;
  }
`
const responsiveStyle = 
  Object.values(range)
  .map<RangeInfo>((range,i) =>({range, maxWidth :CONTENT_WIDTH[i]})).reverse()
  .reduce((style,info) => style += createMedia(info),"");

const app = css`
  background: ${color.mainColor};
`;

const container= css`
    margin:  auto;

    ${responsiveStyle}
`;