import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { Redirect } from '../../utils'

export default function House() {

	const house =
	{
		banner: './casa.jpg',
		title: 'Casas Ferraz',
		slogan: 'Aqui você conquista a sua casa nova'
	}

	return (
		<S.Content>
			<Header />
			<S.Container onClick={() => Redirect('https://hansenimoveis.com/pt-br/area/casas-de-luxo-brasil/')} >
				<h1>{house.title}</h1>
				<img src={house.banner} alt="banner" />
				<p>{house.slogan}</p>
			</S.Container>
		</S.Content>
	)
}
