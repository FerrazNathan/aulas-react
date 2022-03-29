import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Produtos() {
  return (
    <>
      <Header />
      <div>
        <h1>Você está na página de Produtos</h1>
      </div>
      <S.Input
        type='text'
        placeholder='Digite aqui a sua pesquisa'
        onChange={(event) => {
          window.location.href = `/?${event.target.value}`
        }}
      />
    </>
  )
}
