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

  @keyframes slideX{
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  @keyframes slideY{
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyle}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
