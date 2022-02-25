import React from 'react'

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
				último: 'Barcelona',
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
				último: 'Juventus',
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
				último: 'Corinthians',
			}
		},
	]

	return (
		<div>
			<h1> {bestPlayer[0].jogador}</h1>
			<p>Jogador do {bestPlayer[0].time.atual}, {bestPlayer[0].nacionalidade}, {bestPlayer[0].posicao}, {bestPlayer[0].idade} anos</p>
			<p> É o melhor jogador de todos os tempos</p>
		</div>
	)
}

export default Estruturas