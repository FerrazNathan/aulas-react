import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.ContentHeader>
      <S.Text>Aulas FPR</S.Text>
      <ul>
        <li onClick={() => window.location.href = '/'}>Home</li>
        <li onClick={() => window.location.href = '/cadastro'}>Cadastro</li>
      </ul>
    </S.ContentHeader>
  )
}
