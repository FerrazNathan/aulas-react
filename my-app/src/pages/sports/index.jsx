/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Cars() {
	//states para alterar os valores da url
	const [changeQuery, setChangeQuery] = useState()
	const [changeName, setChangeName] = useState()
	const [changeColor, setChangeColor] = useState()
	const [changePlace, setChangePlace] = useState()
	const [changeStatus, setChangeStatus] = useState()

	//função da query string
	const params = new URLSearchParams(window.location.search);
	let urlParams = undefined;
	params.forEach((value, key) => {
		urlParams = Object.assign({}, urlParams, {

			[key]: value.toString()
		});
	});

	//useEffect que vai alterar o valor dos states e ao mesmo tempo tratando o html
	useEffect(() => {
		if (urlParams.page === 'esportes') {
			setChangeQuery(<h1>Futebol</h1>)
		}
		else if (urlParams.page === 'estudos') {
			setChangeQuery(<h1>React</h1>)
		}
		else if (urlParams.page === 'musicas') {
			setChangeQuery(<h1>Adoração</h1>)
		}
		else if (urlParams.page === 'series') {
			setChangeQuery(<h1>Supernatural</h1>)
		}
		else if (urlParams.page === 'desenhos') {
			setChangeQuery(<h1>Avatar</h1>)
		}
		else {
			setChangeQuery(<h1>Chegou dançando</h1>)
		}
	}, [])

	//useEffect que vai alterar o valor dos states e ao mesmo tempo tratando o html
	useEffect(() => {
		if (urlParams.name === 'lojadeesportes') {
			setChangeName(
				<img src='http://s2.glbimg.com/um3fQU8H31S6nyPawHDLlF7h8vc=/940x523/e.glbimg.com/og/ed/f/original/2017/09/29/poderoso-timao-corinthians.jpg' />
			)
		}
		else if (urlParams.name === 'lojadeestudos') {
			setChangeName(
				<img src='https://miro.medium.com/max/1000/0*8J9Lbr6cuonG1KjF' />
			)
		}
		else if (urlParams.name === 'lojademusicas') {
			setChangeName(
				<img src='https://s2.glbimg.com/6aFFIsmDAl8KpgBtB0XUNh40ajI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/4/n/wxo5ZsTL6lA0qTcb9Mwg/spotify-premium-akcio-001-1024x576.jpg' />
			)
		}
		else if (urlParams.name === 'lojadeseries') {
			setChangeName(
				<img src='https://i.pinimg.com/originals/24/55/9d/24559dfe1e14aa27c3c9b5b22bd6fda9.jpg' />
			)
		}
		else if (urlParams.name === 'lojadedesenhos') {
			setChangeName(
				<img src='https://cinematologia.com.br/cine/wp-content/uploads/2020/04/Capa-2.jpg' />
			)
		}
		else {
			setChangeName(
				<h1>Chegou cantando</h1>
			)
		}
	}, [])

	//useEffect que vai alterar o valor dos states e ao mesmo tempo tratando o html
	useEffect(() => {
		if (urlParams.cor === 'grey') {
			setChangeColor(<h1>Meu esporte favorito</h1>)
		}
		else if (urlParams.cor === 'black') {
			setChangeColor(<h1>Meu estudo favorito</h1>)
		}
		else if (urlParams.cor === 'blue') {
			setChangeColor(<h1>Minhas músicas favoritas</h1>)
		}
		else if (urlParams.cor === 'red') {
			setChangeColor(<h1>minha série favorita</h1>)
		}
		else if (urlParams.cor === 'orange') {
			setChangeColor(<h1>Meu desenho favorito</h1>)
		}
		else {
			setChangeColor(<h1>Chegou o leiteiro...</h1>)
		}
	}, [])

	//useEffect que vai alterar o valor dos states e ao mesmo tempo tratando o html
	useEffect(() => {
		if (urlParams.local === 'brasil') {
			setChangePlace(
				<img src='https://i.pinimg.com/originals/5f/0f/f9/5f0ff903015edffc97b3bde9bd90a764.jpg' />
			)
		}
		else if (urlParams.local === 'estadosunidos') {
			setChangePlace(
				<img src='https://png.pngtree.com/png-clipart/20191030/ourlarge/pngtree-usa-flag-illustration-vector-waving-3d-fiber-png-image_1903642.jpg' />
			)
		}
		else if (urlParams.local === 'argentina') {
			setChangePlace(
				<img src='https://img.freepik.com/fotos-gratis/bandeira-da-argentina_1401-57.jpg?w=2000' />
			)
		}
		else if (urlParams.local === 'canada') {
			setChangePlace(
				<img src='https://www.significados.com.br/foto/bandeira-do-canada-significados.jpg' />
			)
		}
		else if (urlParams.local === 'inglaterra') {
			setChangePlace(
				<img src='https://www.eurodicas.com.br/wp-content/uploads/2018/09/bandeira-inglaterra-1200x900.jpg' />
			)
		}
		else {
			setChangePlace(
				<h1>Vai leite?</h1>
			)
		}
	}, [])

	//useEffect que vai alterar o valor dos states e ao mesmo tempo tratando o html
	useEffect(() => {
		if (urlParams.status === 'superloja') {
			setChangeStatus(<h1>O melhor esporte</h1>)
		}
		else if (urlParams.status === 'superestudo') {
			setChangeStatus(<h1>A melhor linguagem</h1>)
		}
		else if (urlParams.status === 'supermusica') {
			setChangeStatus(<h1>A melhor canção</h1>)
		}
		else if (urlParams.status === 'superserie') {
			setChangeStatus(<h1>A melhor série</h1>)
		}
		else if (urlParams.status === 'superdesenho') {
			setChangeStatus(<h1>O melhor desenho</h1>)
		}
		else {
			setChangeStatus(<h1>Chegou o leiteiro...</h1>)
		}
	}, [])

	return (
		<>
			<Header />
			<S.Content>
				<S.Container>
					{/* chamando os states pra exibição */}
					{changeColor}
					{changeQuery}
					{changeStatus}
					{changeName}
					{changePlace}
				</S.Container>
			</S.Content>
		</>
	)
}
