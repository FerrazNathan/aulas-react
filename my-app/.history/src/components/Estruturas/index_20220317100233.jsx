import React from 'react'
import { dataCard } from '../../common/constants/dataCard';

const Estruturas = () => {

	const bestPlayer = [
		{
			jogador: 'Lionel Andrés Messi',
			posicao: 'atacante',
			idade: 34,
			nacionalidade: 'Argentino',
			ganhou_copa: false,
			bola_de_ouro: true,
			time: {
				atual: 'Paris Saint-Germain',
				ultimo: 'Barcelona',
			}
		},
		{
			jogador: 'Cristiano Ronaldo dos Santos Aveiro',
			posicao: 'atacante',
			idade: 36,
			nacionalidade: 'Português',
			ganhou_copa: false,
			bola_de_ouro: true,
			time: {
				atual: 'Manchester-United',
				ultimo: 'Juventus',
			}
		},
		{
			jogador: 'Ronaldo Luís Nazário de Lima',
			posicao: 'atacante',
			idade: 45,
			nacionalidade: 'Brasileiro',
			ganhou_copa: true,
			bola_de_ouro: true,
			time: {
				atual: 'Aposentado',
				ultimo: 'Corinthians',
			}
		},
	]
	const nathan = {
		familia: [
			{
				nome: 'Nathan Henrique Dias Ferraz',
				idade: 34,
				casado: true
			},
			{
				nome: 'Mariane Santos Silva Ferraz',
				idade: 29,
				casado: true
			},
			{
				nome: 'Nicoli de Assis Ferraz',
				idade: 14,
				casado: false
			}
		],
		amigos: [
			{
				nome: 'Douglas Florentino dos Santos',
				time: 'Corinthians'
			}
	
		]
	}	

	return (
		<div>
			<h1> {bestPlayer[0].jogador}</h1>
			<p>Jogador do {bestPlayer[0].time.atual}, {bestPlayer[0].nacionalidade}, {bestPlayer[0].posicao}, {bestPlayer[0].idade} anos</p>
			<p>{dataCard.BESTPLAYER}</p>
			<p>{dataCard.BESTTEAM} {nathan.amigos[0].time}</p>
		</div>
	)
}

export default Estruturas