
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projetos } from './componentes-links/Paginas/Projetos'
import { Contato } from './componentes-links/Paginas/Contato'

import { Rodape } from './componentes-links/Rodape/Rodape'

import { Html } from './Componentes/Html'
import { JavaScript } from './Componentes/JavaScript'
import { Css } from './Componentes/Css'
import { Imersao } from './Componentes/Imersao'
import { PaginaLink } from './componentes-links/CabeicalhoLinks'
import { ReactPage } from './Componentes/React'
import { PaginaInicial } from './componentes-links/Paginas/PaginaInicial'
import { PageIa } from './Componentes/Ia'
import { GitHub } from './Componentes/GitHub'

function App() {


  return (
    <BrowserRouter>
        <PaginaLink/>
      <Routes>
        <Route path='/' element={<PaginaInicial/>} />
        <Route path='/projetos' element={<Projetos/>} />
        <Route path='/contatos' element={<Contato/>} />
        <Route path='/react' element={<ReactPage/>} />
        <Route path='/html' element={<Html/>} />
        <Route path='/css' element={<Css/>} />
        <Route path='/javaScript' element={<JavaScript/>} />
        <Route path='/imersao' element={<Imersao/>} />
        <Route path='/ia' element={<PageIa/>} />
        <Route path='/github' element={<GitHub/>} />
        <Route path='/business agility' element={<GitHub/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App
