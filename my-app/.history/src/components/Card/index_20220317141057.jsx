import React from 'react'
import * as S from './styleCard'

export default function Card({ data }) {
  return (
    <div className='App-card'>
      <S.Content>
        <div className='Card-text'>
          <div className='App-map'>
          <p>{data.fruit ? data.fruit : data.name}</p>
          <p>{data.mixture ? data.mixture : data.team}</p>
          <p>{data.drink? data.drink : data.country}</p>
          </div>
        </div>
      </S.Content>
    </div>
  )
}
