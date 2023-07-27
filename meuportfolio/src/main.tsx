import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './i18n.js'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)