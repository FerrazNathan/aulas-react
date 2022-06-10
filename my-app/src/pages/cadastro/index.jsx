import React, { useState, useEffect } from "react";
import * as S from './styles'
import Header from "../../components/Header";

export const Cadastro = () => {

  const params = localStorage.getItem('user')
  const number = sessionStorage.getItem('data')
  console.log(number);

  return (
    <>
      <Header />
      <S.Box>
        <S.Container>
          Olá {params} bem vindo a equipe
        </S.Container>
        <S.Container>
          {number * 10}
        </S.Container>
      </S.Box>
    </>
  )
}

export default Cadastro