import { FC } from "react";
import { css } from "@emotion/css";

import Header from "./Header";
import { map, range } from "utils";

interface ConetentProps {
  
}
 
const Conetent: FC<ConetentProps> = () => {
  const listDiv = (l: number, className:string) => map<number, JSX.Element>((n)=><div key={n} className={className}/>, range(l));

  return (
    <div className={content}>
      <Header />

      <div className={mainContent}>
        <div className={row}>
          {listDiv(4,card)}
        </div>

        <div className={row}>
          {listDiv(2,bigCard)}
        </div>

        <div className={row}>
          {listDiv(2,card)}
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
`;

const row = css`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

const card = css`
  min-height: 150px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: .5em;
  box-shadow: rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px
`;

const bigCard = css`
  min-height: 300px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  padding: .5em;
  box-shadow: rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px
`;