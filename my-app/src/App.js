import React from 'react';
import './App.css';
import Card from './components/Card';
import { dataCard } from './common/constants/dataCard';
import Link from './components/Link';

function App() {

  const active = true

  return (
    <>
      <div className='App-Card container flex'>
        <Card text={dataCard.TEAMONE} />
        <Card text={dataCard.TEAMTWO} />
        <Card text={dataCard.TEAMTREE} />
        <Card text={dataCard.TEAMFOUR} />
      </div>
      <div className='App-Card container flex'>
        <Link active={active} />
        <Link active={active} />
      </div>
    </>
  );
}

export default App;
