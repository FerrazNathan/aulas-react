import React from 'react';
import './App.css';
import { Testing, Trainning } from './utils/index';

function App() {

  const not = 'Palmeiras'
  const world = 'Mundial'

  return (
    <>
      <form className='container'>
        <h1>Exercício de funções</h1>
        <input
          type='search'
          placeholder='Digite aqui a sua pesquisa'
          onChange={(event) => { Trainning(event.target.value, 'é muito louco') }}
        />
        <button onClick={() => { Testing(not, world) }}>Buscar</button>
      </form>
    </>
  );
}

export default App;
