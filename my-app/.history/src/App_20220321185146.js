import React from 'react';
import Structures from './components/Structures'
import './App.css';
import Map from './components/Map';
import Filter from './components/Filter';
import PresentMap from './components/PresentMap';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <PresentFilter />
      </header>
    </div>
  );
}

export default App;
