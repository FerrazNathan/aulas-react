import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { animal } from '../../mock/index'


export default function Filter( animal ) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
            {
              animal.map(animal => (
                <Filter key={animal.name} animal={animal} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
