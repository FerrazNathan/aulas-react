import React from 'react';
import './App.css';
import { Testing, Trainning, Open } from './utils/index';

function App() {

  return (
    <form className='container'>
      <h1>Exercício de if else</h1>
      <input
        type='search'
        placeholder='Busque um instrumento'
        onChange={(event) => { Trainning(event.target.value) }}
      />
      <button onClick={() => { Open() }}>Buscar</button>
      <h1>Exercício de Switch case</h1>
      <input
        type='search'
        placeholder='Faça a sua combinação'
        onChange={(event) => { Testing(event.target.value) }}
      />
      <button onClick={() => { Open() }}>Buscar</button>
    </form>
  );
}

export default App;
