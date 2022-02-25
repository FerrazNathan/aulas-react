import React from 'react'

const Estruturas = () => {

	const bestPlayer = [
		{
			jogador: 'Lionel Andrés Messi',
			posição: 'atacante',
			idade: 34,
			país: 'Argentina',
			ganhou-copa: false,
			bola-de-ouro: true,
			time: {
				atual: 'Paris Saint-Germain',
				último: 'Barcelona',
			}
		},
		{
			jogador: 'Cristiano Ronaldo dos Santos Aveiro',
			posição: 'atacante',
			idade: 36,
			país: 'Portugal',
			ganhou-copa: false,
			bola-de-ouro: true,
			time: {
				atual: 'Manchester-United',
				último: 'Juventus',
			}
		},
		{
			jogador: 'Ronaldo Luís Nazário de Lima',
			posição: 'atacante',
			idade: 45,
			país: 'Brasil',
			ganhou-copa: true,
			bola-de-ouro: true,
			time: {
				atual: 'Aposentado',
				último: 'Corinthians',
			}
		},
	]

	return (
		<div>
			<h1>{bestPlayer[0].jogador}</h1>
			<p>Melhor jogador de todos os tempos</p>
		</div>
	)
}

export default Estruturas