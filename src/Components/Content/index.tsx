import { FC } from "react";
import { css } from "@emotion/css";

import Header from "./Header";

interface ConetentProps {
  
}
 
const Conetent: FC<ConetentProps> = () => {
  return (
    <div className={content}>
      <Header />

      {/* main content */}
    </div>
  );
}
 
export default Conetent;

const content = css`
  width: 100%;
  margin-left: 2em;
`;