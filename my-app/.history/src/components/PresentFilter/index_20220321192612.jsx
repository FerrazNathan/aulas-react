import React from 'react';

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
            <>
              <p>{bebida.bebida}</p>
              <p>{bebida.mistura}</p>
              <p>{bebida.sobremesa}</p>

            </>
          )
        })
      }

    </div>
  )
}

export default PresentFilter;