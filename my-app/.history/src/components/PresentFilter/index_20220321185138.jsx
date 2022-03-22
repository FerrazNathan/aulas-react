import React from 'react';
import { presentFilters } from '../../mock/index'

// import { Container } from './styles';

function PresentFilter() {

  const list = presentFilters.filter(presentFilter =>{
    return presentFilter !== 'Futebol'
  })

  return(
    <div className='container flex'>
      <h1>{List.bebida}</h1>
    </div>
  )
}

export default PresentFilter;