import React from 'react'
import * as S from './styleCard'

export default function CardFilter ({ data }) {
  return (
    <div className='App-card'>
      <S.Content>
        <p>{data.fruit ? data.fruit : data.name}</p>
        <p>{data.mixture ? data.mixture : data.team}</p>
        <p>{data.drink ? data.drink : data.country}</p>
      </S.Content >
    </div >
  )
}
