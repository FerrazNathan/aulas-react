import React from 'react'
import * as S from './styles'

export default function Card({ img, setStart, clicado }) {

  return (
    <S.Container>
      <S.Content>
        <S.BoxText>
          <img src={img} onClick={() => setStart(clicado)} />
        </S.BoxText>
      </S.Content>
    </S.Container>
  )
}
