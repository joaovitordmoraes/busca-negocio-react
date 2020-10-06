import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/generic/reset';
import Base from './styles/elements/base';
import App from './App';

ReactDOM.render(
  <>
    <Reset />
    <Base />
    <App />
  </>,
  document.getElementById('root')
);
