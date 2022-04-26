import React, { useState } from 'react'

export default function Quiz() {

	//states das respostas
	const [king, setKing] = useState()
	const [lions, setLions] = useState()
	const [gospel, setGospel] = useState()
	const [traitor, setTraitor] = useState()
	const [ark, setArk] = useState()

	//state para saber qual a resposta vc está
	const [answer, setAnswer] = useState(0)

	//state para saber em que nível do quiz está
	const [position, setPosition] = useState(0)

	//variáveis com as respostas, dessa forma devolve um true
	const questionOne = king === 'Saul'
	const questionTwo = lions === 'Daniel'
	const questionThree = gospel === 'Mateus Marcos Lucas e João'
	const questionFour = traitor === 'Judas'
	const questionFive = ark === 'Noé'

	//função para setar o nível da pergunta, e resposta que vc está
	const results = (level) => {
		setPosition(position + 1)
		if (level) {
			setAnswer(answer + 1)
		}
	}

	//switch case com a conclusão final do quiz
	const conclusion = () => {
		switch (answer) {
			case 0: return 'Você foi horrível'
			case 1: return 'Você foi muito ruim'
			case 2: return 'Você foi ruim'
			case 3: return 'Você foi mediano'
			case 4: return 'Você foi bom'
			case 5: return 'Você foi muito bom'
			default: return 'Você não conseguiu'
		}
	}

	return (
		<div className='container'>
			{/* renderização condicional que mostra em qual etapa do quiz vc está */}
			{position === 0 &&
				<form className='container'>
					<h1>Responda a Questão</h1>
					<label>Quem foi o primeiro rei de Israel?</label>

					{/* onChange para pegar o valor digitado */}
					<input type='search' onChange={(event) => { setKing(event.target.value)}} />

					{/* onClick para avançar para a próxima questão */}
					<button onClick={() => results(questionOne)}>Resposta</button>
				</form>
			}
			{position === 1 &&
				<form className='container'>
					<h1>Responda a Questão</h1>
					<label>Quem foi jogado na cova dos leões?</label>
					<input type='search' onChange={(event) => { setLions(event.target.value)}} />
					<button onClick={() => results(questionTwo)}>Resposta</button>
				</form>
			}
			{position === 2 &&
				<form className='container'>
					<h1>Responda a Questão</h1>
					<label>Quais são os 4 avangelhos?</label>
					<input type='search' onChange={(event) => { setGospel(event.target.value)}} />
					<button onClick={() => results(questionThree)}>Resposta</button>
				</form>
			}
			{position === 3 &&
				<form className='container'>
					<h1>Responda a Questão</h1>
					<label>Qual foi o discipulo que traiu Jesus?</label>
					<input type='search' onChange={(event) => { setTraitor(event.target.value)}} />
					<button onClick={() => results(questionFour)}>Resposta</button>
				</form>
			}
			{position === 4 &&
				<form className='container'>
					<h1>Responda a Questão</h1>
					<label>Quem construiu a arca?</label>
					<input type='search' onChange={(event) => { setArk(event.target.value)}} />
					<button onClick={() => results(questionFive)}>Resposta</button>
				</form>
			}
			{/* renderização condicional para saber a sua avaliação do quiz */}
			{position === 5 &&
				<h1>{conclusion()}</h1>
			}
		</div>
	)
}
