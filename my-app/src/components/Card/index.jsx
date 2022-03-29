import React from 'react'
import { dataCard } from '../../common/constants/dataCard'
import * as S from './styles'

export default function Card({ text }) {

  return (
    <S.Container>
      <S.Content>
        <S.BoxText>
          {dataCard.TEAMS}
        </S.BoxText>
        {text}
      </S.Content>
    </S.Container>
  )
}
