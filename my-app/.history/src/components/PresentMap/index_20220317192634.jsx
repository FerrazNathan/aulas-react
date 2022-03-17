import React from 'react'
import * as S from './stylesPresentMap'
import { dataCard } from '../../common/constants/dataCard'

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
          campeao: 'Não, porque tem um time bom e um dos piores técnicos do mundo',
          iLike: true
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
          campeao: 'Sim, porque tem um time bom e não tem adversário na Alemanha',
          iLike: false
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
          campeao: 'Sim, porque tem um time bom',
          iLike: false
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
          campeao: 'Sim, porque tem um time bom e um dos melhores técnicos do mundo',
          iLike: true
        },
      ],
    },
  ]

  return (
    <>
      {
        teams.map((team, index)=> (
          <div className='container flex' key={index.team}>
            <S.BoxText>
              <p>{dataCard.TEAM} {team.team}</p>
              <p>{dataCard.ATACANTE} {team.melhoresJogadores[0].atacante}</p>
              <p>{dataCard.MEIA} {team.melhoresJogadores[0].meia}</p>
              <p>{dataCard.ZAGUEIRO} {team.melhoresJogadores[0].zagueiro}</p>
              <p>{team.favorito[0].campeao}</p>
            </S.BoxText>
          </div>
        )
        )
      }
    </>
  )
}
