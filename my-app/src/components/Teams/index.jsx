import React, { useEffect, useState } from 'react'
import * as S from './style'

export default function Teams() {
  //states para armazenar o nome dos times e os jogadores, setState vai alterar
  const [team, setTeam] = useState('Seleção Brasileira')
  const [goalkeeper, setGoalkeeper] = useState('Alisson Becker')
  const [rightSide, setRightSide] = useState('Danilo')
  const [leftSide, setLeftSide] = useState('Renan Lodi')
  const [rightDefender, setRightDefender] = useState('Marquinhos')
  const [leftDefender, setLeftDefender] = useState('Tiago Silva')
  const [firstSteeringWeel, setFirstSteeringWeel] = useState('Casemiro')
  const [secondSteeringWeel, setSecondSteeringWeel] = useState('Lucas Paquetá')
  const [half, setHalf] = useState('Neymar')
  const [rightEnd, setRightEnd] = useState('Raphinha')
  const [leftEnd, setLeftEnd] = useState('Vinícius jr')
  const [forward, setForward] = useState('Gabriel Jesus')

  //state para setar o time que eu vou alterar
  const [start, setStart] = useState('')

  //useEffect vai usar o set de cada state para alterar o time e os jogadores
  useEffect(() => {
    if (start === 'brasil') {
      setTeam('Seleção Brasileira')
      setGoalkeeper('Alisson Becker')
      setRightSide('Danilo')
      setLeftSide('Renan Lodi')
      setRightDefender('Marquinhos')
      setLeftDefender('Tiago Silva')
      setFirstSteeringWeel('Casemiro')
      setSecondSteeringWeel('Lucas Paquetá')
      setHalf('Neymar')
      setRightEnd('Raphinha')
      setLeftEnd('Vinícius jr')
      setForward('Gabriel Jesus')
    }
    if (start === 'corinthians') {
      setTeam('Time do Corinthians')
      setGoalkeeper('Cássio')
      setRightSide('Fagner')
      setLeftSide('Fábio Santos')
      setRightDefender('João Vitor')
      setLeftDefender('Raul Gustavo')
      setFirstSteeringWeel('Du Queiroz')
      setSecondSteeringWeel('Maycon')
      setHalf('Renato Augusto')
      setRightEnd('Willian')
      setLeftEnd('Roger Guedes')
      setForward('Jõ')
    }
    else if (start === 'palmeiras') {
      setTeam('Time do Palmeiras')
      setGoalkeeper('Weverton')
      setRightSide('Marcos Rocha')
      setLeftSide('Piquerez')
      setRightDefender('Gustavo Gomez')
      setLeftDefender('Murilo')
      setFirstSteeringWeel('Zé Rafael')
      setSecondSteeringWeel('Danilo')
      setHalf('Rafael Veiga')
      setRightEnd('Dudu')
      setLeftEnd('Gustavo Scarpa')
      setForward('Rony')
    }
    else if (start === 'saoPaulo') {
      setTeam('Time do São Paulo')
      setGoalkeeper('Jandrei')
      setRightSide('Rafinha')
      setLeftSide('Wellington')
      setRightDefender('Arboleda')
      setLeftDefender('Léo Pelé')
      setFirstSteeringWeel('Luan')
      setSecondSteeringWeel('Gabriel Sara')
      setHalf('Rodrigo Nestor')
      setRightEnd('Rigoni')
      setLeftEnd('Luciano')
      setForward('Calleri')
    }
  }, [start])

  return (
    <S.Container>
      <h1>{team}</h1>
      <S.Flex>
        <div>
          <h2>Goleiro</h2>
          <p>{goalkeeper}</p>
        </div>
        <div>
          <h2>Laterais</h2>
          <p>{rightSide}</p>
          <p>{leftSide}</p>
        </div>
        <div>
          <h2>Zagueiros</h2>
          <p>{rightDefender}</p>
          <p>{leftDefender}</p>
        </div>
        <div>
          <h2>Meias</h2>
          <p>{firstSteeringWeel}</p>
          <p>{secondSteeringWeel}</p>
          <p>{half}</p>
        </div>
        <div>
          <h2>Atacantes</h2>
          <p>{rightEnd}</p>
          <p>{leftEnd}</p>
          <p>{forward}</p>
        </div>
      </S.Flex>
      <S.Buttons>
        {/* no onClick dos botões eu chamo a função que vai alterar os times e jogadores */}
        <S.Brasil onClick={() => setStart('brasil')}>Brasil</S.Brasil>
        <S.Corinthians onClick={() => setStart('corinthians')}>Corinthians</S.Corinthians>
        <S.Palmeiras onClick={() => setStart('palmeiras')}>Palmeiras</S.Palmeiras>
        <S.SaoPaulo onClick={() => setStart('saoPaulo')}>São Paulo</S.SaoPaulo>
      </S.Buttons>
    </S.Container>
  );
}
