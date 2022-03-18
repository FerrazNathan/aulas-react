import React from 'react'
import * as S from './styleCard'
import { dataCard } from '../../common/constants/dataCard';

export default function CardFilter({ data }) {
  return (
    <S.Content>
      <h1>{data.title ? data.title : data.juice}</h1>
      {data.fruit ?
        (<p>{dataCard.FRUIT} {data.fruit}</p>
        ) : (
          <p>{dataCard.NAME} {data.name}</p>
        )}
      {data.mixture ?
        (<p>{dataCard.ADD} {data.mixture}</p>
        ) : (
          <p>{dataCard.PLAYER} {data.team}</p>
        )}
      <p>{data.country && data.country }</p>
    </S.Content >
  )
}
