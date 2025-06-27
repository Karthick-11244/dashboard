import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import Dashboard from './components/Dashboard.jsx'

import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Navbar/>
    <App />
    <Dashboard/>
    <Footer/>
  </StrictMode>,
)
