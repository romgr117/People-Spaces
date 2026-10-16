import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/abel'
import '@fontsource-variable/lexend-deca'
import '@fontsource/la-belle-aurore'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
