import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { player, shoppingList } from '../../mock/index'
import '../../App.css';

export default function Filter() {

  const search = player.filter(player => {
    return(
      player.worldCup === true
    )
  })

  const list = shoppingList.filter(shoppingList =>{
    return(
      shoppingList.fruit === 'Abacaxi'
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
            {
              list.map(fruit => (
                <p>{fruit.fruit}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
