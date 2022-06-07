import React, { useState, useEffect } from "react";
import * as S from './styles'
import Header from "../../components/Header";
import axios from "axios";

export const Cadastro = () => {

  const [title, setTitle] = useState()
  const [genre, setGenre] = useState()
  const [type, setType] = useState()
  const [image, setImage] = useState()
  const [monitoring, setMonitoring] = useState()
  const [responseData, setResponseData] = useState()

  const url = 'https://aula-de-crud-default-rtdb.firebaseio.com/cadastro.json'

  useEffect(() => {
    try {
      axios.get(url)
        .then(function (response) {
          setResponseData(response.data)
          setMonitoring(!monitoring)
        }).catch(() => {
        })
    } catch (e) {
      throw new Error("Algo deu errado na conexão")
    }
  }, [monitoring])

  const register = () => {
    try {
      axios.post(url, {
        title: title,
        genre: genre,
        type: type,
        image: image,
      })
        .then(function (response) {
          setMonitoring(!monitoring)
        }).catch(() => {
        })
    } catch (e) {
      throw new Error("Algo deu errado na conexão");
    }
  }

  const deleting = (id) => {
    try {
      axios.delete(`https://aula-de-crud-default-rtdb.firebaseio.com/cadastro/${id}.json`, {})
        .then(function () {
          setMonitoring(!monitoring)
        }).catch(() => {
        })
    } catch (e) {
      throw new Error("Algo deu errado na conexão");
    }
  }

  const editing = (id) => {
    axios.patch(`https://aula-de-crud-default-rtdb.firebaseio.com/cadastro/${id}.json`, {
      title: title,
      genre: genre,
      type: type,
      image: image
    })
      .then(function () {
        setMonitoring(!monitoring)
      }).catch(() => {
        throw new Error("Algo deu errado na conexão");
      })
  }

  return (
    <>
      <Header />
      <S.Box>
        <h1>Filmes e séries cadastrados</h1>
        <S.Container>
          {
            responseData && Object.entries(responseData).map(item => {
              return (
                <>
                  <S.List >
                    <p>Título: </p>
                    <p>{item[1].title}</p>
                    <input type='search' onChange={(e) => setTitle(e.target.value)} />
                  </S.List>
                  <S.List >
                    <p>Gênero: </p>
                    <p>{item[1].genre}</p>
                    <input type='search' onChange={(e) => setGenre(e.target.value)} />
                  </S.List>
                  <S.List>
                    <p>Tipo: </p>
                    <p>{item[1].type}</p>
                    <select onChange={(e) => setType(e.target.value)}>
                      <option>Selecione</option>
                      <option value='filme'>Filme</option>
                      <option value='serie'>Série</option>
                    </select>
                  </S.List>
                  <S.List >
                    <p>imagem</p>
                    <input type='search' onChange={(e) => setImage(e.target.value)} />
                  </S.List>
                  <S.Button onClick={() => editing(item[0])}>
                    Editar
                  </S.Button>
                  <S.Button onClick={() => deleting(item[0])}>Remover</S.Button>
                  <S.Button onClick={() => window.location.href='/'}>Ver</S.Button>
                </>
              )
            })
          }

        </S.Container>
        <form>
          <h2>Cadastrar novo filme ou série</h2>
          <label>Título</label>	<input type='text' onChange={(e) => setTitle(e.target.value)} />
          <label>Gênero</label><input type='text' onChange={(e) => setGenre(e.target.value)} />
          <label>Imagem</label><input type='text' onChange={(e) => setImage(e.target.value)} />
          <select onChange={(e) => setType(e.target.value)}>
            <option>Selecione</option>
            <option value='filme'>Filme</option>
            <option value='serie'>Série</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault()
              register()
            }}>
            Registrar
          </button>
        </form>
      </S.Box>
    </>
  )
}

export default Cadastro