import React from 'react'
import '../../App.css';
import { dataCard } from '../../common/constants/dataCard';
import { family } from '../../mock/index';

export default function Map() {

  return (
    <>
      {
        family.map(member => (
          <div className='App-card' key={member.name}>
            <div className='Card-header'>
              <div className='App-map'>

              </div>
              <img src={member.image} alt="foto de perfil" />
              <h2>{member.title}</h2>
            </div>
            <div className='Card-text'>
              <p>{dataCard.NAME}<span>{member.name}</span></p>
              <p>{dataCard.AGE}<span>{member.age} {dataCard.YEARS}</span></p>
              <p>{dataCard.BIRTHDATE} <span>{member.birthDate}</span></p>
              <p>{dataCard.PHONE} <span>{member.phone}</span></p>
              <p>{dataCard.NAMEMOTHER} <span>{member.nameMother}</span></p>
              {member.nameFather && <p>{dataCard.NAMEFATHER} <span>{member.nameFather}</span></p>}
            </div>
          </div>
        ))
      }
    </>
  )
}
