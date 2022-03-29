import React from 'react'
import * as S from './styles'

export default function Header() {
  return (
    <S.ContentHeader>
      <S.Text>Sports Store</S.Text>
      <ul>
        <li onClick={() => window.location.href = '/'}>Home</li>
        <li onClick={() => window.location.href = '/produtos'}>Produtos</li>
        <li onClick={() => window.location.href = '/contatos'}>Contato</li>
        <li onClick={() => window.location.href = '/sobre'}>Sobre</li>
      </ul>
    </S.ContentHeader>
  )
}
