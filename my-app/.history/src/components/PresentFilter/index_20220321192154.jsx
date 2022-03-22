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
    <div className='container flex'>
      {
        presentFilters.map((bebida) => {
          const lista = bebida.filter((item)=> {
            return item.esportes !== 'Futebol'
          })

          return (
            <p>{lista.bebida}</p>
          )
        })
      }
      
    </div>
  )
}

export default PresentFilter;