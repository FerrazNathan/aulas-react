import React from 'react'


export default function ListData({ item }) {
  return (
    <div>
      <p>Nome: {item.name}</p>
      <p>Idade: {item.age}</p>
      <p>Telefone: {item.fone}</p>
      <p>Nascimento: {item.date_born}</p>
      <p>Mãe: {item.name_mother}</p>
      {item.name_father && <p>Pai: {item.name_father}</p>}
    </div>
  )
}
