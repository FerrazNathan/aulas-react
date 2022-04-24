import React from 'react'

function Home() {

	let valor
	const digite = (valorDigitado) => {
		valor = valorDigitado
	}
	const redirect = () => {
		window.location.href = `/results?${valor}`
	}

	return (
		<form className='container'>
			<h1>Exercício de if else</h1>
			<input
				type='search'
				placeholder='Digite aqui a sua pesquisa'
				onChange={(e) => { digite(e.target.value) }}
			/>
			<button
				onClick={(event) => {
					event.preventDefault()
					redirect()
				}}
			>Buscar
			</button>
		</form>
	)
}

export default Home
