import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PaginaLink } from './componentes-links/Links'
import { Home } from './componentes-links/Paginas/Home'
import { Projetos } from './componentes-links/Paginas/Projetos'
import { Contato } from './componentes-links/Paginas/Contato'
import { PaginaInicial } from './componentes-links/Paginas/PaginaInicial/paginaInicial'
import { Rodape } from './componentes-links/Rodape/Rodape'

function App() {


  return (
    <BrowserRouter>
        <PaginaLink/>
      <Routes>
        <Route path='/' element={<PaginaInicial/>} />
        <Route path='/projetos' element={<Projetos/>} />
        <Route path='/contatos' element={<Contato/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App
