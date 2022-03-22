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


  const list = presentFilters.map((index, bebida) =>{
    return list !== 'Futebol'
  })

  return(
    <div className='container flex'>
      <h1>{List.bebida}</h1>
    </div>
  )
}

export default PresentFilter;