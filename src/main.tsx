import './style.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // Make sure the path points to your new App.tsx

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)