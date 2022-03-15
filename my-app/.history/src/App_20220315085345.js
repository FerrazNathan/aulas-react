import React from 'react';
import Estruturas from '../src/components/Estruturas'
import './App.css';
import ListData from './components/ ListData';
import { family, animal } from './mock';

function App() {

  const users = {
    user: 'premiun'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-map'>
          {users.user === 'italo' ? (
            <h1>Você não tem acesso a esse conteúdo </h1>
          ) : (
            <>
              {users.user === 'premiun' &&
                <div>
                  <h1>Parabéns você é um usuário Premiun e tem acesso a todo conteúdo da nossa loja</h1>
                  <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D141743826250541&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fconteudopremiumbr%2F&tbnid=COLNKffBKWoaYM&vet=12ahUKEwjHlbT8hsj2AhVHCbkGHRqxAi4QMygAegUIARC7AQ..i&docid=NzQcxr7l_AVoEM&w=500&h=500&itg=1&q=conteudo%20premium&ved=2ahUKEwjHlbT8hsj2AhVHCbkGHRqxAi4QMygAegUIARC7AQ' />
                </div>
              }
              {users.user === 'padrao' && <h1>Você é um usuário padrão, e tem acesso ao conteúdo padrão de nossa loja</h1>}
              {users.user === 'basico' && <h1>Você tem acesso ao conteúdo básico de nossa loja</h1>}
            </>
          )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
