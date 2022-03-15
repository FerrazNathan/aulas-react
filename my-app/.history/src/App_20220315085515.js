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
                  <img href='https://www.google.com/imgres?imgurl=https%3A%2F%2Fpainel.souenfermagem.com.br%2Fuploads%2F65%2F65_2018-06-16_17-06-27_193_407806012.jpg&imgrefurl=https%3A%2F%2Fwww.souenfermagem.com.br%2Fcomunidade%2Fconteudo-premium%2F&tbnid=jxqXFRnpywfL4M&vet=12ahUKEwjHlbT8hsj2AhVHCbkGHRqxAi4QMygCegUIARC_AQ..i&docid=muukxTnwMGE2vM&w=1200&h=630&q=conteudo%20premium&ved=2ahUKEwjHlbT8hsj2AhVHCbkGHRqxAi4QMygCegUIARC_AQ' />
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
