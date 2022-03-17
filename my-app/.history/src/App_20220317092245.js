import React from 'react';
import Estruturas from '../src/components/Estruturas'
import './App.css';
import ListData from './components/ ListData';
import { family, animal } from './mock';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Estruturas /> */}
        <div className='App-map'>
          {
            family.map(item => (
              <ListData key={item.name} item={item} />
            ))
          }
        </div>

        <div className='App-map'>
          {
            animal.map(animal => (
              <ListData key={animal.name} animal={animal} />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
