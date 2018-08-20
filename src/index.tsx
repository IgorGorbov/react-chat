import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import App from './App';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
