import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import PoliticaPrivacidade from './PoliticaPrivacidade.jsx'

function RootComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
