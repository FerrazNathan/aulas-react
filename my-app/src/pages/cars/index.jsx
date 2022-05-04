import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { redirect } from '../../utils'

export default function Cars() {

	return (
		<S.Content>
			<Header />
			<S.Container onClick={() => redirect('https://www.webmotors.com.br/carros-de-luxo')}>
				<h1>Exercício de Split</h1>
			</S.Container>
		</S.Content>
	)
}
