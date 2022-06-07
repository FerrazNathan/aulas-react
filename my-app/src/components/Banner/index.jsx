import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";
import axios from "axios";

export const Banner = () => {

	const [responseData, setResponseData] = useState()


	const url = 'https://aula-de-crud-default-rtdb.firebaseio.com/cadastro.json'

	useEffect(() => {
		console.log('ok')
		try {
			axios.get(url)
				.then(function (response) {

					setResponseData(response?.data)
				}).catch(() => {
				})
		} catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}, [])

	const changeMovies = responseData && Object.values(responseData).filter(item => {
		return item.type === 'filme'
	}
	)


	const changeSeries = responseData && Object.values(responseData).filter(item => {
		return item.type === 'serie'
	}
	)


	return (
		<>
			<Header />
			<S.Box>
				<S.BoxMovies>
					<h1>Filmes</h1>
					{
						changeMovies && changeMovies.map(item => {
							return (
								<S.List >
									<p>Título: {item.title}</p>
									<p>Tipo: {item.type}</p>
									<p>Gênero: {item.genre}</p>
									<img src={item.image} />
								</S.List>

							)
						})
					}
				</S.BoxMovies>
				<S.BoxSeries>
					<h1>Séries</h1>
					{
						changeSeries && changeSeries.map(item => {
							return (
								<S.List >
									<p>Título: {item.title}</p>
									<p>Tipo: {item.type}</p>
									<p>Gênero: {item.genre}</p>
									<img src={item.image} />
								</S.List>
							)
						})
					}
				</S.BoxSeries>
			</S.Box>
		</>
	)
}