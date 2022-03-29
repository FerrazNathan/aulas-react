import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Home() {

  const value = window.location.href.includes('z')
  const params = window.location.href.includes('y')

  return (
    <S.Container>
      <Header />
      {value &&
        <S.Content>
          <h1>Conteúdo Padrão</h1>
        </S.Content>
      }
       <S.Input
            type='text'
            placeholder='Digite aqui a sua pesquisa'
            onChange={(event) => {
              window.location.href = `/?${event.target.value}`
            }}
          />
      {params &&
        <S.Box>
          <h1>Melhor Conteúdo</h1>
        </S.Box>
      }
    </S.Container>
  )
}
