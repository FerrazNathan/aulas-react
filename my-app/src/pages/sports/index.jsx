/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Cars() {

	//função da query string
	const params = localStorage.getItem('user')
	

	return (
		<>
			<Header />
			{params}
		</>
	)
}
