import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { players, shoppingList } from '../../mock/index'
import '../../App.css';
import Card from '../Card';

export default function Filter() {

  const search = players.filter(player => {
    return(
      player.worldCup
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
            {/* {
              list.map((fruit, index) => (
                <Card key={index} fruit={fruit} />
              ))
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}
