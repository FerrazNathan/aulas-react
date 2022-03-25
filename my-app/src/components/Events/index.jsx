import React from 'react'
import * as S from './styleEvent'

export default function Events() {

  const addition = 4
  const youCan = 'Você Conseguiu'

  return (
    <S.Container>
      <S.Content>
        <S.Label>Calculadora de Adição</S.Label>
        <S.Input
          type='number'
          placeholder='Faça a sua soma'
          onChange={(event) => {
            alert(JSON.parse(event.target.value) + addition)
          }} />
        <S.Button>Calcular</S.Button>
      </S.Content>

      <S.BoxText>
        <p onClick={() => {
          alert(youCan)
        }}>Continue</p>
      </S.BoxText>
    </S.Container>
  )
}
