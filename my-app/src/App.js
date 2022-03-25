import React from 'react';
import Structures from './components/Structures'
import './App.css';
import Map from './components/Map';
import Filter from './components/Filter';
import Events from './components/Events';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Structures />
        <Map /> */}
        {/* <Filter /> */}
        <Events />
      </header>
    </div>
  );
}

export default App;
