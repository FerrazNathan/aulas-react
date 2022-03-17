import React from 'react'
import { players, shoppingList } from '../../mock/index'
import '../../App.css';
import CardFilter from '../CardFilter';

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
            <CardFilter key={index} data={player} />

          ))
        }
      </section>

      <section className='container flex'>
        {
          list.map((fruit, index) => (
            <CardFilter key={index} data={fruit} />
          ))
        }
      </section>
    </>
  )
}
