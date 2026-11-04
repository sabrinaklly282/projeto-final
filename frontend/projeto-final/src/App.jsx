import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Feed from './pages/Feed'
import Perfil from './pages/Perfil'
import Configuracoes from './pages/Configuracoes'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<PaginaInicial />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/configuracoes' element={<Configuracoes />} />
    </Routes>
    </>
  )
}

export default App
