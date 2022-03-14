import React from 'react';
import Estruturas from '../src/components/Estruturas'
import './App.css';
import ListData from './components/ ListData';
import { family } from './mock';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Estruturas /> */}
        {/* <div className='App-map'>
          {
            family.map(item => (
              <ListData key={item.name} item={item} />
            ))
          }
        </div> */}
      </header>
    </div>
  );
}

export default App;
