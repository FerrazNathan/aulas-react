import React from 'react';
import './App.css';
import { Testting, Trainning } from './utils/index';

function App() {

  return (
    <>
      <form>
        <input
          type='number'
          onChange={(event) => { Trainning(event.target.value, 'é muito louco') }}
        />
        <button onClick={(event) => { Testting('Palmeiras', 'Mundial') }}>Buscar</button>
      </form>
    </>
  );
}

export default App;
