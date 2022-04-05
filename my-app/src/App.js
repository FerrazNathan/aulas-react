import React from 'react';
import { dataCard } from './common/constants/dataCard';
import PresentProp from './components/PresentProp';
import { nathan } from './mock'

function App() {

  return (
    <div>
      <h1>{dataCard.TITLE}</h1>
      {nathan.linguagens.map((nome) => {
        return (
          <div>
            <PresentProp
              title={nome.front}
              flag={nome.js}
              text={nome.style}
            />
          </div>
        )
      })}
    </div>
  )
}

export default App;
