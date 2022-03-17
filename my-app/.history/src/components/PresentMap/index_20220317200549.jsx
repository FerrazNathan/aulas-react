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
        {
          iLike: 'É um dos times que eu gosto',
          favorito: true
        }
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
        {
          iLike: 'Não gosto desse time',
          favorito: true
        }
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
        {
          iLike: 'Odeio esse time',
          favorito: true
        }

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
        {
          iLike: 'É um dos times que eu mais gosto',
          favorito: true
        }
      ],
    },
  ]

  return (
    <>
      {
        teams.map((team, index) => (
          <div className='container flex App-Card' key={index}>
            <S.BoxText>
              <p>{dataCard.TEAM} {team.team}</p>
            {team.melhoresJogadores.map((atacante, index) => {
              return (
                <div className='container flex App-Card' key={index}>
                  <p>{dataCard.ATACANTE} {atacante.atacante}</p>
                  <p>{dataCard.MEIA} {atacante.meia}</p>
                  <p>{dataCard.ZAGUEIRO} {atacante.zagueiro}</p>

                </div>
              )

            })}
            {
              team.favorito.map((isLike, index) => {
                return (
                  <div className='container flex App-Card' key={index}>
                    <p>{dataCard.FAVORITO} {isLike.campeao}</p>
                    <p>{isLike.iLike}</p>
                  </div>
                )
              }

              )}
            </S.BoxText>

          </div>
        )
        )
      }
    </>
  )
}
