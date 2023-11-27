import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './componentes/Header';
import Tareas from './componentes/Tareas';
import Ventana from './componentes/Ventana';

import './App.css'



function App() {


  return (
    <>
      <div className='nav'>
        <Header />
      </div>

      <div className='contenedor'>

        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Ventana />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
