import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.ContentHeader>
      <S.Text>Aulas FPR</S.Text>
      <ul>
        <li onClick={() => window.location.href = '/'}>Home</li>
        {/* <li onClick={() => window.location.href = '/sports'}>Esportes</li> */}
      </ul>
    </S.ContentHeader>
  )
}
