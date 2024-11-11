import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaExpo from './pages/PaginaExpo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaExpo />
  </StrictMode>,
)
