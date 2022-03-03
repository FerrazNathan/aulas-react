import React from 'react'


export default function ListData({ item }) {
  return (
    <div>
      <p>Nome: {item.nome}</p>
      <p>Idade: {item.idade}</p>
      <p>Telefone: {item.telefone}</p>
      <p>Nascimento: {item.data_nasc}</p>
      <p>Mãe: {item.mae}</p>
      {item.pai && <p>Pai: {item.pai}</p>}
    </div>
  )
}
