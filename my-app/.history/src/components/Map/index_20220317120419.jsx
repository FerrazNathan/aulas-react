import React from 'react'
import '../../App.css';
import { dataCard } from '../../common/constants/dataCard';
import { family } from '../../mock/index';

export default function Map() {

  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='App-map'>
          {
            family.map(member => (
              <Map key={member.name} member={member} />
            ))
          }
        </div>
        <img src={member.image} alt="foto de perfil" />
        <h2>{member.title}</h2>
      </div>
      
    </div>
  )
}
