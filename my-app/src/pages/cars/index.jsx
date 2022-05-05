import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Cars() {

	const url = window.location.href
	const spliting = url.split('=', 3)[1]
	const splitingUrl = url.split('=', 3)[2]
	const urlSpliting = url.split('&', 3)[2]

	console.log('spliting => ', spliting);
	console.log('splitingUrl => ', splitingUrl);
	console.log('urlSpliting => ', urlSpliting);

	// http://localhost:3000/cars?page=carros&name=lojadecarros&cor=blue

	return (
		<>
			<Header />
			<S.Content>
				<S.Container>
					{splitingUrl === 'lojadecarros&cor' &&
						<h1>Loja de carros futuro</h1>
					}
					{urlSpliting === 'cor=blue' &&
						<p>A loja dos seu sonhos</p>
					}
					{spliting === 'carros&name' &&
						<img src='./cars.jpg' />
					}
				</S.Container>
			</S.Content>
		</>
	)
}
