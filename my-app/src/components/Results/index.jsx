import React from 'react'

export default function Results() {

	const redirect = window.location.href

	const page = () => {
		if (redirect.includes('messi')) {
			return (
				<div className='container'>
					<h1>Lionel Andrés Messi</h1>
					<img src='./messi.jpeg' alt='Messi' />
					<p>Melhor jogador de todos os tempos</p>
				</div>
			)
		}
		else if (redirect.includes('cristiano')) {
			return (
				<div className='container'>
					<h1>Cristiano Ronaldo Aveiro</h1>
					<img src='./cr7.jpeg' alt='Cristiano Ronaldo' />
					<p>Melhor jogador português de todos os tempos</p>
				</div>
			)
		}
		else if (redirect.includes('muller')) {
			return (
				<div className='container'>
					<h1>Thomas Muller</h1>
					<img src='./muller.jpeg' alt='Thomas Muller' />
					<p>Ganhou a copa do mundo com a Alemanha</p>
				</div>
			)
		}
		else if (redirect.includes('ronaldo')) {
			return (
				<div className='container'>
					<h1>Ronaldo Luís Nazário de Lima</h1>
					<img src='./ronaldo.jpeg' alt='Ronaldo Fenômeno' />
					<p>Melhor centroavante de todos os tempos</p>
				</div>
			)
		}
		else {
			return(
				<div className='container'>
					<h1>Some daqui vacilão</h1>
				</div>
			) 
		}
	}

	return (
		<>
		{ page() }
		</>
		
	)
}

