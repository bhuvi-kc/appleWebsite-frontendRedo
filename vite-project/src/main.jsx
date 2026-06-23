import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Heritage from './Heritage'
import Maison from './Maison'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/maison" element={<Maison />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)