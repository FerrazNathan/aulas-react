import React from 'react';
import './App.css';
import { Testting, Trainning } from './utils/index';

function App() {

  return (
    <>
      <form className='container'>
        <h1>Exercício de funções</h1>
        <input
          type='number'
          placeholder='Digite aqui a sua pesquisa'
          onChange={(event) => { Trainning(event.target.value, 'é muito louco') }}
        />
        <button onClick={() => { Testting('Palmeiras', 'Mundial') }}>Buscar</button>
      </form>
    </>
  );
}

export default App;
