import React from 'react'
import ReactDOM from 'react-dom'

import Reset from './styles/generic/reset'
import Base from './styles/elements/base'
import App from './App'
import Settings from './styles/settings/settings'

ReactDOM.render(
  <>
    <Reset />
    <Settings />
    <Base />
    <App />
  </>,
  document.getElementById('root')
)
