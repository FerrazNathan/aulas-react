import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import { redirect } from '../../utils'

export default function Cars() {

	return (
		<>
			<Header />
			<S.Content>
				<S.Container>
					<h1>Exercício de Query String...</h1>
				</S.Container>
			</S.Content>
		</>
	)
}