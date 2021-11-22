import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from "@emotion/react";

import App from 'App';

const globalStyle = css`
  * {
    box-sizing: border-box;
  }

  html,body  {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
