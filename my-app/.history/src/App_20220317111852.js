import React from 'react';
import Structures from './components/Structures'
import './App.css';
import Map from './components/Map';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Structures />
        <Map />
        {/* <Filter /> */}

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
