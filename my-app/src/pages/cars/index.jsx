import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { Redirect } from '../../utils'

export default function Cars() {
	const cars =
	{
		banner: './cars.jpg',
		title: 'Super Cars',
		slogan: 'A melhor loja de carros que vc já viu'
	}
	return (
		<S.Content>
			<Header />
			<S.Container onClick={() => Redirect('https://www.webmotors.com.br/carros-de-luxo')}>
				<h1>{cars.title}</h1>
				<img src={cars.banner} alt="banner" />
				<p>{cars.slogan}</p>
			</S.Container>
		</S.Content>
	)
}
