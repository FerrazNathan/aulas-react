import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";

export const Banner = () => {

	const [data, setData] = useState()

	const open = () => {
		localStorage.setItem('user', 'Nathan')
	}

	const seeMore = () => {
		sessionStorage.setItem('data', data)
		window.location.href = '/cadastro'
	}

	return (
		<>
			<Header />
			<S.Box>
				Exercício de localStorage
				<a href='/cadastro'>
					<S.Button onClick={() => open()}>
						Ver
					</S.Button>
				</a>
			</S.Box>
			<S.Box>
				Exercício de sessionStorage
				<input type='number' onChange={(e) => setData(e.target.value)} />
					<S.Button onClick={() => seeMore()}>
						Ver Mais
					</S.Button>
			</S.Box>
		</>
	)
}