import React from 'react'
import * as S from './stylesPresentMap'

export default function PresentMap() {

  const teams = [
    {
      team: 'PSG',
      lider: true,
      melhoresJogadores: [
        {
          atacante: 'Messi',
          meia: 'Paredes',
          zagueiro: 'Sérgio Ramos'
        },
      ],
      favorito: [
        {
          string: 'Não, porque tem um time bom e um dos piores técnicos do mundo',
          bool: false
        },
      ],
    },
    {
      team: 'Bayern',
      lider: true,
      melhoresJogadores: [
        {
          atacante: 'Lewandowski',
          meia: 'Muller',
          zagueiro: 'Boateng'
        },
      ],
      favorito: [
        {
          string: 'Sim, porque tem um time bom e não tem adversário na Alemanha',
          bool: true
        },
      ],
    },
    {
      team: 'Real Madrid',
      lider: true,
      melhoresJogadores: [
        {
          atacante: 'Benzema',
          meia: 'Modric',
          zagueiro: 'Alaba'
        },
      ],
      favorito: [
        {
          string: 'Sim, porque tem um time bom',
          bool: true
        },
      ],
    },
    {
      team: 'Liverpool',
      lider: false,
      melhoresJogadores: [
        {
          atacante: 'Salah',
          meia: 'Tiago',
          zagueiro: 'Van Dijk'
        },
      ],
      favorito: [
        {
          string: 'Sim, porque tem um time bom e um dos melhores técnicos do mundo',
          bool: true
        },
      ],
    },
  ]

  return (
    <div className='container flex'>
      <S.BoxText>
        Tatu
      </S.BoxText>
    </div>
  )
}

