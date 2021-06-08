import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Application from './Application'
import reportWebVitals from './reportWebVitals'
import { MemoryRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <MemoryRouter>
    <Application />
  </MemoryRouter>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
