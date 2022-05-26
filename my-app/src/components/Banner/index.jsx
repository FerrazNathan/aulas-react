import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";
import axios from "axios";

export const Banner = () => {

	const [responseData, setResponseData] = useState()

	console.log('o que está chegando aqui =>', responseData)

	useEffect(() => {
		axios.get('https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json')
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
									{/* <h1>Lista de inscrição</h1> */}
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