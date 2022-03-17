import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { player } from '../../mock/index'
import '../../App.css';

export default function Filter() {

  const search = player.filter(player => {
    return(
      player.worldCup === true
    )
  })
  
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
            {
              search.map(player => (
                <p>{dataCard.NAME} {player.name}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
