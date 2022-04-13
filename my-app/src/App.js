import React from 'react';
import './App.css';
import { Banner } from './components/Banner';
import Cars from '../src/pages/cars'
import House from '../src/pages/house'
import Market from '../src/pages/market'
import Sports from '../src/pages/sports'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Banner />} />
        <Route path='/cars' exact element={<Cars />} />
        <Route path='/house' element={<House />} />
        <Route path='/market' element={<Market />} />
        <Route path='/sports' element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

