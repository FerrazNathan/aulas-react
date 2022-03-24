import React from 'react'
import * as S from './styleEvent'

export default function Events() {

  const addition = 4
  const youCan = 'Você Conseguiu'

  return (
    <div className='Container flex App-Card'>
      <S.Content>
        <label>Calculadora de Adição</label>
        <input
          type='number'
          placeholder='Faça a sua soma'
          onChange={(event) => {
            alert(JSON.parse(event.target.value) + addition)
          }} />
      </S.Content>

      <S.BoxText>
        <p onClick={() => {
          alert(youCan)
        }}>Continue</p>
      </S.BoxText>
    </div>
  )
}
