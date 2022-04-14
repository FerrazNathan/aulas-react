import React from 'react';
import './App.css';
import { testing, trainning, open } from './utils/index';

function App() {

  return (
    <form className='container'>
      <h1>Exercício de if else</h1>
      <input
        type='search'
        placeholder='Busque um instrumento'
        onChange={(event) => { trainning(event.target.value) }}
      />
      <button onClick={() => { open() }}>Buscar</button>
      <h1>Exercício de Switch case</h1>
      <input
        type='search'
        placeholder='Faça a sua combinação'
        onChange={(event) => { testing(event.target.value) }}
      />
      <button onClick={() => { open() }}>Buscar</button>
    </form>
  );
}

export default App;
