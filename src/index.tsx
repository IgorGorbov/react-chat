import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import { injectGlobal } from 'styled-components';

import App from './App';

import 'semantic-ui-css/semantic.min.css';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

/* tslint:disable: no-unused-expression max-line-length */
injectGlobal`
    body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) !important;
    overflow: hidden ;
  }
`;

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
