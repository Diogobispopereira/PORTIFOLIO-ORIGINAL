import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projetos } from './componentes-links/Paginas/Projetos'
import { Contato } from './componentes-links/Paginas/Contato'
import { PaginaInicial } from './componentes-links/Paginas/PaginaInicial/paginaInicial'
import { Rodape } from './componentes-links/Rodape/Rodape'
import { React } from './Componentes/React'
import { Html } from './Componentes/Html'
import { JavaScript } from './Componentes/JavaScript'
import { Css } from './Componentes/Css'
import { Imersao } from './Componentes/Imersao'
import { PaginaLink } from './componentes-links/CabeicalhoLinks'

function App() {


  return (
    <BrowserRouter>
        <PaginaLink/>
      <Routes>
        <Route path='/' element={<PaginaInicial/>} />
        <Route path='/Projetos' element={<Projetos/>} />
        <Route path='/Contatos' element={<Contato/>} />
        <Route path='/React' element={<React/>} />
        <Route path='/Html' element={<Html/>} />
        <Route path='/Css' element={<Css/>} />
        <Route path='/JavaScript' element={<JavaScript/>} />
        <Route path='/Imersão' element={<Imersao/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App
