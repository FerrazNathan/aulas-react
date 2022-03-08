import React from 'react';
import Estruturas from '../src/components/Estruturas'
import './App.css';
import ListData from './components/ ListData';
import { familia } from './mock';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Estruturas /> */}
        <div className='App-map'>
          {
            familia.map(item => (
              <ListData key={item.name} item={item} />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
