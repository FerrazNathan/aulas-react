import React from 'react';
import './App.css';
import Card from './components/Card';
import { dataCard } from './common/constants/dataCard';

function App() {

  return (
    <div className='App-Card container flex'>
      <Card text={dataCard.TEAMONE} />        
      <Card text={dataCard.TEAMTWO} />
      <Card text={dataCard.TEAMTREE} />
      <Card text={dataCard.TEAMFOUR} />
    </div>
  );
}

export default App;
