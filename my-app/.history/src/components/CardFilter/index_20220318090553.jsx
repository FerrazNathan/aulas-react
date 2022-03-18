import React from 'react'
import * as S from './styleCard'

export default function CardFilter({ data }) {
  return (
    <div className='App-card'>
      <S.Content>
        <h1>{data.title ? data.title : data.juice}</h1>
        <p>{data.fruit ? data.fruit : data.name}</p>
        <p>{data.fruit ? 'com' : ''}</p>
        <p>{data.mixture ? data.mixture : data.team}</p>
        <p>{data.country ? data.country : '' }</p>
      </S.Content >
    </div >
  )
}
