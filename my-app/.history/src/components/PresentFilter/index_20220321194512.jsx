import React from 'react';
import * as S from './styles.PresentFilter'


function PresentFilter() {


  const presentFilters = [
    {
      bebida: 'Suco',
      mistura: 'Bisteca',
      sobremesa: 'Pudim',
      esportes: [
        {
          preferido: 'Futebol',
          secundario: 'Vôlei',
        },
        {
          preferido: 'Basquete',
          secundario: 'Fórmula 1'
        }
      ]
    },
    {
      bebida: 'Coca-Cola',
      mistura: 'Picanha',
      sobremesa: 'Pavê',
      esportes: [
        {
          preferido: 'Futebol',
          secundario: 'M.M.A',
        },
        {
          preferido: 'Basquete',
          secundario: 'Natação'
        }
      ]
    },
  ]

  return (
    <div className='container flex App-Card'>
      {
        presentFilters.map((bebida) => {
          const lista = bebida.esportes.filter((item) => {
            return item.preferido !== 'Futebol'
          })

          return (
            <div className='container flex App-Card'>
              <h1>{bebida.bebida}</h1>
              <h1>{bebida.mistura}</h1>
              <h1>{bebida.sobremesa}</h1>
              {
                lista.map((esportes) => {
                  return (
                    <div className='container flex App-Card'>
                      <h1>{esportes.preferido}</h1>
                      <h1>{esportes.secundario}</h1>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
  )
}

export default PresentFilter;