import React, { useState } from 'react';
import './App.css';

function App() {

  const replace = () => {
    setChange('Meu amor maior') || setGod('Mudou a minha vida')
  }
  const [change, setChange] = useState('Jesus')
  const [god, setGod] = useState('Salvador')
  const [counter, setCounter] = useState(2)

  return (
    <div className='container'>
      <h1>1° Exercício de useState</h1>
      {change} {god}
      <button onClick={() =>  replace()}>Buscar</button>
      <h1>2° Exercício de useState</h1>
      {counter}
      <button onClick={() => setCounter(counter * 4)}>Multiplicar por 4</button>
    </div>
  );
}

export default App;
