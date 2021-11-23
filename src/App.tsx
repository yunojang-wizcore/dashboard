import { css } from "@emotion/css";

import { color, CONTENT_WIDTH, range } from "style/theme";

import Navbar from "Components/Navbar";
import Content from "Components/Content";

function App() {
  return (
    <main className={app}>
      <div className={container}>
        <Navbar />

        <Content />
      </div>
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