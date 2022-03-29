import React from 'react';
import Structures from './components/Structures'
import './App.css';
import Map from './components/Map';
import Filter from './components/Filter';
import Events from './components/Events';
import Home from './pages/home/index'
import Sobre from './pages/sobre/index'
import Produtos from './pages/produtos'
import Contato from './pages/contato'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-Card flex container'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/produtos' element={<Produtos />}/>
              <Route path='/contatos' element={<Contato />}/>
            </Routes>
          </BrowserRouter>

        </div>
      </header>
    </div>
  );
}

export default App;
