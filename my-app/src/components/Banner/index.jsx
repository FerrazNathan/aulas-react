import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";
import axios from "axios";

export const Banner = () => {

	const [responseData, setResponseData] = useState()
	
	const url = 'https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json'

	useEffect(() => {
		axios.get(url)
			.then(function (response) {
				setResponseData(Object.entries(response.data))
			})
	}, [])

	return (
		<>
			<Header />
			<S.Box>
				<h1>Lista de inscrição</h1>
				<S.Container>
					{
						responseData && Object.values(responseData).map((name) => {
							return (
								<>
									<S.List key={name}>
										<p>{name[1].name}</p>
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