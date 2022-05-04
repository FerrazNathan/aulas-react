import React from 'react';
import './App.css';
import Header from './components/Header';

export default function App() {

  const url = 'http://localhost:3000/pages?page=carros&name=lojadecarros&cor=blue'
  const spliting = url.split('page=')[1]
  const splitingUrl = url.split('name')[1]
  const urlSpliting = url.split('page=')[1]

  return (
    <div>
      <Header />
      <ul className='lists'>
        <li>
          <a href='/cars'>Teste de Split</a>
        </li>
      </ul>
      <ul className='lists'>
        <li>
          <a href='/sports'>Teste Query String</a>
        </li>
      </ul>
    </div>
  );
}

