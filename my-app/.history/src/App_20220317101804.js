import React from 'react';
import Structures from './components/Structures'
import './App.css';
import Map from './components/Map';
import { family, animal } from './mock';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Structures />
        <div className='App-map'>
          {
            family.map(item => (
              <Map key={item.name} item={item} />
            ))
          }
        </div>

        {/* <div className='App-map'>
          {
            animal.map(animal => (
              <ListData key={animal.name} animal={animal} />
            ))
          } */}
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
