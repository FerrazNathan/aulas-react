import React from 'react'
import '../../App.css';

export default function ListData({ item, animal }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        {/* <img src={item.image} alt="foto de perfil" />
        <h2>{item.title}</h2> */}
      </div>
      <div className='Card-text'>
        {/* <p>Nome: <span>{item.name}</span></p>
        <p>Idade: <span>{item.age} anos</span></p>
        <p>Nascimento: <span>{item.birthDate}</span></p>
        <p>Telefone: <span>{item.phone}</span></p>
        <p>Mãe: <span>{item.nameMother}</span></p>
        {item.nameFather && <p>Pai: <span>{item.nameFather}</span></p>} */}
        <p>{animal.name}</p>
      </div>
    </div>
  )
}
