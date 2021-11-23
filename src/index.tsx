import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from "@emotion/react";

import App from 'App';

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    border: none;
    user-select: none;
    background: none;
  }

  input {
    outline: none;
  }

  ul {
    list-style-type: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
