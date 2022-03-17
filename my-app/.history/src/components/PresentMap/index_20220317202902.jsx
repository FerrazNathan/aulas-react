import React from 'react'
import * as S from './stylesPresentMap'
import { dataCard } from '../../common/constants/dataCard'
import '../../App.css';

export default function PresentMap() {

  const teams = [
    {
      team: 'Paris Saint Germain',
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
          iLike: 'Tem um time muito bom e um dos piores técnicos do mundo',
          campeao: true
        },
        {
          iLike: 'É um dos times que eu gosto por causa do Messi',
          campeao: true
        }
      ],
    },
    {
      team: 'Bayern de Munique',
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
          iLike: 'Tem um time muito bom e não tem adversário na Alemanha',
          campeao: false
        },
        {
          iLike: 'Não gosto desse time',
          campeao: true
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
          iLike: 'Tem um time bom e uma camisa muito pesada',
          campeao: false
        },
        {
          iLike: 'Odeio esse time',
          campeao: true
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
          campeao: 'Tem um time muito bom e um dos melhores técnicos do mundo',
          iLike: true
        },
        {
          iLike: 'É um dos times que eu mais gosto',
          campeao: true
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
                      <p> {isLike.iLike}</p>
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
