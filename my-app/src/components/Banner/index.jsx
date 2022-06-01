import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";
import axios from "axios";

export const Banner = () => {

	const [responseData, setResponseData] = useState()
	const [dataPokemon, setDataPokemon] = useState()
	
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
	const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1/'

	useEffect(() => {
		axios.get(url)
			.then(function (response) {
				setResponseData(response.data)
			})
	}, [])

	useEffect(() => {
		axios.get(urlPokemon)
		.then(function (response) {
			setDataPokemon(response.data)
		})
	},[])

	console.log('o que esta aqui', dataPokemon);

	const informations = () => {
		
	}

	return (
		<>
			<Header />
			<S.Box>
				<h1>Lista de Pokémons</h1>
				<S.Container>
					{
						responseData && responseData.results.map((name) => {
							return (
								<>
									<S.List key={name}>
										<p>{name.name}</p>
									</S.List>
								</>

							)
						})
					}
				</S.Container>
			</S.Box>
		</>
	)
}