import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './provider/ThemeProvider.tsx'
import './style/themeStyle.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
