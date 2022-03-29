import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Home() {

  const value = window.location.href.includes('z')
  const params = window.location.href.includes('y')

  return (
    <>
      <Header />
      <S.Container>
        <S.Input
          type='text'
          placeholder='Digite aqui a sua pesquisa'
          onChange={(event) => {
            window.location.href = `/?${event.target.value}`
          }}
        />
        {value &&
          <S.Content>
            <h1>Conteúdo Padrão</h1>
            <img src='./lojapadrao.jpg' alt='Loja Padrão'></img>
          </S.Content>
        }
        {params &&
          <S.Box>
            <h1>Conteúdo para clientes Vip</h1>
            <img src='./lojapremiun.jpg' alt='Loja Premium' />
          </S.Box>
        }

      </S.Container>
    </>
  )
}
