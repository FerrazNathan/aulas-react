import React from 'react'
import './App.css'
import Sports from '../src/pages/sports'
import Cars from '../src/pages/cars'
import { Banner } from './components/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/sports' element={<Sports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

