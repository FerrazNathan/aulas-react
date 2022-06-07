import React from 'react'
import './App.css'
import Cadastro from '../src/pages/cadastro'
import { Banner } from './components/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

