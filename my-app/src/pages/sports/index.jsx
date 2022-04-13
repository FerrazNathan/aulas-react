import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { Redirect } from '../../utils'

export default function Sports() {

	const sports =
	{
		banner: './lojapremiun.jpg',
		title: 'Sports total',
		slogan: 'Onde seu sonho se torna realidade'
	}

	return (
		<S.Content>
			<Header />
			<S.Container onClick={() => Redirect('https://www.centauro.com.br')} >
				<h1>{sports.title}</h1>
				<img src={sports.banner} alt="banner" />
				<p>{sports.slogan}</p>
			</S.Container>
		</S.Content>
	)
}