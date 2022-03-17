import React from 'react'
import { dataCard } from '../../common/constants/dataCard';
import { players, shoppingList } from '../../mock/index'
import '../../App.css';
import Card from '../Card';

export default function Filter() {

  const search = players.filter(player => {
    return (
      player.worldCup
    )
  })

  const list = shoppingList.filter(list => {
    return (
      list.fruit === 'abacaxi'
    )
  })

  return (
    <>
      <section className='container flex'>
        {
          search.map((player, index) => (
            <div key={index}>
              <p>{dataCard.NAME} {player.name}</p>
            </div>
          ))
        }
      </section>

      <section className='container flex'>
        {
          list.map((fruit, index) => (
            <Card key={index} fruit={fruit} />
          ))
        }
      </section>
    </>
  )
}
