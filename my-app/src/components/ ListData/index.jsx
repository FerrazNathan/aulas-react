import React from 'react'
import '../../App.css';

export default function ListData({ item }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <img src={item.foto} alt="foto de perfil" />
        <h2>{item.title}</h2>
      </div>
      <div className='Card-text'>
        <p>Nome: <span>{item.name}</span></p>
        <p>Idade: <span>{item.age}</span></p>
        <p>Telefone: <span>{item.fone}</span></p>
        <p>Nascimento: <span>{item.date_born}</span></p>
        <p>Mãe: <span>{item.name_mother}</span></p>
        {item.name_father && <p>Pai: <span>{item.name_father}</span></p>}
      </div>
    </div>
  )
}
