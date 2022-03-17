import React from 'react'
import '../../App.css';
import { dataCard } from '../../common/constants/dataCard';
import { family, animal } from '../../mock';

export default function Map({ item, animal }) {

  <div className='App-map'>
          {
            family.map(item => (
              <Map key={item.name} item={item} />
            ))
          }
        </div>

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
        <p>{dataCard.PHONE} <span>{item.phone}</span></p>
        <p>{dataCard.NAMEMOTHER} <span>{item.nameMother}</span></p>
        {item.nameFather && <p>{dataCard.NAMEFATHER} <span>{item.nameFather}</span></p>}
        {/* <p>{animal.name}</p> */}
      </div>
    </div>
  )
}
