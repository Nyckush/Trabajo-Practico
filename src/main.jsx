import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { About } from './componentes/About/About.jsx'
import { Contact } from './componentes/Contact/Contact.jsx'
import { Footer } from './componentes/Footer/Footer.jsx'
import { Header } from './componentes/Header/Header.jsx'
import { Proyect } from './componentes/Proyect/Proyect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <Contact />
    <Footer />
    <Header />
    <Proyect />
  </React.StrictMode>
)
