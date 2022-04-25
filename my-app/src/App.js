import React, { useState } from 'react';
import './App.css';

function App() {

  const [change, setChange] = useState('Jesus Cristo')
  const [god, setGod] = useState('Meu Salvador')
  const [counter, setCounter] = useState(2)

  const replace = () => {
    setChange('O Espírito Santo') || setGod('Melhor amigo')
  }

  return (
    <div className='container'>
      <h1>1° Exercício de useState</h1>
      <p>{change} é o {god}</p>
      <button onClick={() =>  replace()}>Confirmar</button>
      <h1>2° Exercício de useState</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter * 4)}>Multiplicar por 4</button>
    </div>
  );
}

export default App;
