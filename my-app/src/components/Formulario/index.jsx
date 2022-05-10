import React, { useState } from 'react'
import * as S from './styles'

export default function Formulario() {

  //ustate para armazenar o valor recebido nos selects
  const [lojas, setLojas] = useState()
  const [cor, setCor] = useState()
  const [comodo, setComodo] = useState()
  const [fornecedor, setFronecedor] = useState()

  return (
    //selects que vão dar opção de selecionar o que eu quero, usar onChange para capturar o valor selecionado
    <S.Container>
      <p>Lojas</p>
      <select name="Lojas" onChange={(e) => setLojas(e.target.value)}>
        <option>Selecione</option>
        <option value="riachuelo">Riachuelo</option>
        <option value="americanas">Americanas</option>
        <option value="magazine-luiza">Magazine Luiza</option>
      </select>
      <p>Cor</p>
      <select name="Cor" onChange={(e) => setCor(e.target.value)}>
        <option>Selecione</option>
        <option value="azul">Azul</option>
        <option value="amarelo">Amarelo</option>
        <option value="vermelho">Vermelho</option>
      </select>
      <p>Cômodo</p>
      <select name="Cômodo" onChange={(e) => setComodo(e.target.value)}>
        <option>Selecione</option>
        <option value="cozinha">Cozinha</option>
        <option value="sala">Sala</option>
        <option value="quarto">Quarto</option>
      </select>
      <p>Fornecedor</p>
      <select name="Fornecedor" onChange={(e) => setFronecedor(e.target.value)}>
        <option>Selecione</option>
        <option value="madeira-madeira">Madeira Madeira</option>
        <option value="bonato">Bonato</option>
        <option value="philco">Philco</option>
      </select>
      {/* url montada recebendo o valor selecionado de uma forma dinamica */}
      <button onClick={() => window.location.href = `/sports?lojas=${lojas}&cor=${cor}&comodo=${comodo}&fornecedor=${fornecedor}`}>Pesquisar</button>
    </S.Container>
  )
}
