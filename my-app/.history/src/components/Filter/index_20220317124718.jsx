import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { players, shoppingList } from '../../mock/index'
import '../../App.css';

export default function Filter() {

  const search = players.filter(player => {
    return(
      player.worldCup === true
    )
  })

  const list = shoppingList.filter(list =>{
    return(
      list.fruit === 'abacaxi'
    )
  })
  
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map' >
            {
              search.map((player, index) => (
                <div key={index}>
                  <p>{dataCard.NAME} {player.name}</p>
                </div>
              ))
            }
            {
              list.map((fruit, index) => (
                <div key={index}>
                <p>{fruit.fruit}</p>
                <p>{fruit.mixture}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
