import React from 'react'
import '../../App.css';
import { dataCard } from '../../common/constants/dataCard';

export default function ListData({ item, animal }) {

  return (
    <div className='App-card'>
      <div className='Card-header'>
        <img src={item.image} alt="foto de perfil" />
        <h2>{item.title}</h2>
      </div>
      <div className='Card-text'>
        <p>{dataCard.NAME}<span>{item.name}</span></p>
        <p>{dataCard.AGE}<span>{item.age} {dataCard.YEARS}</span></p>
        <p>{dataCard.BIRTHDATE} <span>{item.birthDate}</span></p>
        <p>Telefone: <span>{item.phone}</span></p>
        <p>Mãe: <span>{item.nameMother}</span></p>
        {item.nameFather && <p>Pai: <span>{item.nameFather}</span></p>}
        {/* <p>{animal.name}</p> */}
      </div>
    </div>
  )
}