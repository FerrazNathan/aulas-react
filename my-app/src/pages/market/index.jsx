import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { Redirect } from '../../utils'

export default function Market() {

	const market =
	{
		banner: './mercado.jpg',
		title: 'Hipermercados Monster',
		slogan: 'Aqui você encontra tudo o que você precisa'
	}

	return (
		<S.Content>
			<Header />
			<S.Container onClick={() => Redirect('https://www.carrefour.com.br')} >
				<h1>{market.title}</h1>
				<img src={market.banner} alt="banner" />
				<p>{market.slogan}</p>
			</S.Container>
		</S.Content>
	)
}