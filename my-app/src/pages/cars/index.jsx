/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Cars() {
	// split da url, dividindo a url e depois pegando apenas um dado
	const url = window.location.href
	const spliting = url.split('=', 3)[1]
	const spliting2 = spliting.split('&')[0]
	const splitingUrl = url.split('=', 3)[2]
	const splitingUrl2 = splitingUrl.split('&')[0]
	const urlSpliting = url.split('&', 3)[2]
	const urlSpliting2 = urlSpliting.split('=')[1]

	//state para alterar cada dado da url
	const [changeSplit, setChangeSplit] = useState()
	const [splitChange, setSplitChange] = useState()
	const [changingSplit, setChangingSplit] = useState()

	//useEffect que altera o state e ao mesmo tempo já trata o html
	useEffect(() => {
		if (spliting2 === 'carros') {
			setChangeSplit(
				<img src='./cars.jpg' />
			)
		}
		else if (spliting2 === 'motos') {
			setChangeSplit(
				<img src='https://www.motohub.com.br/painel/storage/274d3ea4df3c381fa862d68ecf3ddc8e/img_site/g/b273dd1554e2702dd606f155dc7f1191.JPG' />
			)
		}
		else if (spliting2 === 'barcos') {
			setChangeSplit(
				<img src='https://lifestylebrazil.com.br/wp-content/uploads/2020/04/27161403-dsc-8853-2_cover_1600x1068.jpg' />
			)
		}
		else {
			setChangeSplit(
				<h1>Não existe essa loja</h1>
			)
		}
	}, [])

	//useEffect que altera o state e ao mesmo tempo já trata o html
	useEffect(() => {
		if (splitingUrl2 === 'lojadecarros') {
			setSplitChange(
				<h1>Loja de carros futuro</h1>
			)
		}
		else if (splitingUrl2 === 'lojademotos') {
			setSplitChange(
				<h1>Loja de motos futuro</h1>
			)
		}
		else if (splitingUrl2 === 'lojadebarcos') {
			setSplitChange(
				<h1>Loja de barcos futuro</h1>
			)
		}
		else {
			setSplitChange(
				<h1>Não existe essa loja</h1>
			)
		}
	}, [])

	//useEffect que altera o state e ao mesmo tempo já trata o html
	useEffect(() => {
		if (urlSpliting2 === 'blue') {
			setChangingSplit(
				<p>A loja de carros dos seu sonhos</p>
				)
		}
		else if (urlSpliting2 === 'red') {
			setChangingSplit(
				<p>A loja de motos dos seu sonhos</p>
				)
		}
		else if (urlSpliting2 === 'grey') {
			setChangingSplit(
				<p>A loja de barcos dos seu sonhos</p>
				)
		}
		else {
			setChangingSplit(
				<h1>Não existe essa loja</h1>
			)
		}
	}, [])

	return (
		<>
			<Header />
			<S.Content>
				<S.Container>
					{/* chamando os states para exibição */}
					{splitChange}
					{changingSplit}
					{changeSplit}
				</S.Container>
			</S.Content>
		</>
	)
}

