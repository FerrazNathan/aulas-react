import React from 'react';
import Estruturas from '../src/components/Estruturas'
import './App.css';
import ListData from './components/ ListData';
import { family, animal } from './mock';

function App() {

  const users = {
    user: 'premium'
  }

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
        {
          <div className='App-map'>
            {/* {
              animal.map(animal => (
                <ListData key={animal.name} animal={animal} />
              ))
            } */}
            {users.user === 'italo' ? (
              <h1>Você não tem acesso a esse conteúdo </h1>
            ) : (
              <>
                {users.user === 'premiun' && <h1>Parabéns você é um usuário Premiun e tem acesso a todo conteúdo da nossa loja</h1>}
                {users.user === 'padrao' && <h1>Você é um usuário padrão, e tem acesso ao conteúdo padrão de nossa loja</h1>}
                {users.user === 'basico' && <h1>Você tem acesso ao conteúdo básico de nossa loja</h1>}
              </>
            )
            }

          </div>
        }
      </header>
    </div>
  );
}

export default App;
