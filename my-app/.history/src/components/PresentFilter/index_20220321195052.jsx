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
            <S.Container>
              <h1>Bebida: {bebida.bebida}</h1>
              <h1>Mistura: {bebida.mistura}</h1>
              <h1>Sobremesa: {bebida.sobremesa}</h1>
              {
                lista.map((esportes) => {
                  return (
                    <div className='container flex App-Card'>
                      <div><h1>Preferido: {esportes.preferido}</h1></div>
                      <div><h1>Secundário: {esportes.secundario}</h1></div>
                    </div>
                  )
                })
              }
            </S.Container>
          )
        })
      }

    </div>
  )
}

export default PresentFilter;