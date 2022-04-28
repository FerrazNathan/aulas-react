import React, { useEffect, useState } from 'react'
import * as S from './styles'

export default function ListName() {

  const [title, setTitle] = useState('Nomes de mulheres da minha família')
  const [nameOne, setNameOne] = useState('Mariane')
  const [nameTwo, setNameTwo] = useState('Nicoli')
  const [nameThree, setNameThree] = useState('Lorrayne')
  const [nameFour, setNameFour] = useState('Lívia')
  const [nameFive, setNameFive] = useState('Isabele')
  const [nameSix, setNameSix] = useState('Rosa')
  const [nameSeven, setNameSeven] = useState('Fernanda')
  const [nameEight, setNameEight] = useState('Roberta')
  const [nameNine, setNameNine] = useState('Carolina')
  const [nameTen, setNameTen] = useState('Manuela')
  const [changeName, setChangeName] = useState(0)

  useEffect(() => {
    if (changeName === 0) {
      setTitle('Nomes das mulheres da minha família')
      setNameOne('Mariane')
      setNameTwo('Nicoli')
      setNameThree('Lorrayne')
      setNameFour('Lívia')
      setNameFive('Isabele')
      setNameSix('Rosa')
      setNameSeven('Fernanda')
      setNameEight('Roberta')
      setNameNine('Carolina')
      setNameTen('Manuela')
    }
    if (changeName === 1) {
      setTitle('Nomes dos homens da célula')
      setNameOne('Rafael')
      setNameTwo('Felipe')
      setNameThree('Ítalo')
      setNameFour('Vini')
      setNameFive('Vitão')
      setNameSix('Caio')
      setNameSeven('Ismael')
      setNameEight('Nathan')
      setNameNine('Maurício')
      setNameTen('Gilberto')
    }
    else if (changeName === 2) {
      setTitle('Nomes de profetas da bíblia')
      setNameOne('Isaías')
      setNameTwo('Elias')
      setNameThree('Jeremias')
      setNameFour('Eliseu')
      setNameFive('Samuel')
      setNameSix('Daniel')
      setNameSeven('Ezequiel')
      setNameEight('Jonas')
      setNameNine('Joel')
      setNameTen('Zacarias')
    }
    else {
      setChangeName(0)
    }
  }, [changeName])

  return (
    <S.Section>
      <S.Title>
        <h1>{title}</h1>
      </S.Title>
      <S.Text>
        <p>{nameOne}</p>
        <p>{nameTwo}</p>
        <p>{nameThree}</p>
        <p>{nameFour}</p>
        <p>{nameFive}</p>
        <p>{nameSix}</p>
        <p>{nameSeven}</p>
        <p>{nameEight}</p>
        <p>{nameNine}</p>
        <p>{nameTen}</p>
      </S.Text>
      <S.Button onClick={() => setChangeName(changeName + 1)}>Trocar</S.Button>
    </S.Section>
  )
}
