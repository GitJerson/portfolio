import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SwitchPage from './components/switchPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SwitchPage />
  </StrictMode>,
)
