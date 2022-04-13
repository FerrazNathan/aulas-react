import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.ContentHeader>
      <S.Text>Super Store</S.Text>
      <ul>
        <li onClick={() => window.location.href = '/'}>Home</li>
        <li onClick={() => window.location.href = '/cars'}>Carros</li>
        <li onClick={() => window.location.href = '/house'}>Casas</li>
        <li onClick={() => window.location.href = '/market'}>Hipermercado</li>
        <li onClick={() => window.location.href = '/sports'}>Esportes</li>
      </ul>
    </S.ContentHeader>
  )
}
