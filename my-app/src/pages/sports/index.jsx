/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import * as S from './styles'
import Header from '../../components/Header'

export default function Cars() {

	//função da query string
	const params = new URLSearchParams(window.location.search);
	let urlParams = undefined;
	params.forEach((value, key) => {
		urlParams = Object.assign({}, urlParams, {

			[key]: value.toString()
		});
	});

  	//função que vai alterar os valores dinamicamente
		const background = urlParams.cor === 'azul' && 'azul' ||
		urlParams.cor === 'amarelo' && 'amarelo' ||
		urlParams.cor === 'vermelho' && 'vermelho'


  	//função que vai alterar os valores dinamicamente
		const lojas = () => {
		if (urlParams.lojas === 'riachuelo') {
			return 'https://s3.amazonaws.com/gupy5/production/socialmedias/14062/c9eb5c7e479ec3481927d5e5136fd0a4_positivo.png'
		}
		else if (urlParams.lojas === 'americanas') {
			return 'https://static.wixstatic.com/media/5c3c89_8225c36de0e84544a111da42453bfbde~mv2.png/v1/fill/w_800%2Ch_300%2Cal_c%2Cq_90/file.jpg'
		}
		else if (urlParams.lojas === 'magazine-luiza') {
			return 'https://t.ctcdn.com.br/L0kgGjzIXXoPVLbphDiOvGsDZL4=/400x400/smart/i490104.jpeg'
		}
		else {
			return 'https://www.epcriacao.com.br/public/img/site/erro-404.png'
		}
	}

  	//função que vai alterar os valores dinamicamente
		const color = () => {
		if (urlParams.cor === 'azul') {
			return 'Azul'
		}
		else if (urlParams.cor === 'amarelo') {
			return 'Amarelo'
		}
		else if (urlParams.cor === 'vermelho') {
			return 'Vermelho'
		}
		else {
			return 'Volte para o menu anterior'
		}
	}

  	//função que vai alterar os valores dinamicamente
		const comodo = () => {
		if (urlParams.comodo === 'cozinha') {
			return ' https://www.moveisplanejadosbauru.com.br/wp-content/uploads/2012/09/banner-cozinha.jpg'
		}
		else if (urlParams.comodo === 'sala') {
			return 'http://www.moveisplanejadosbauru.com.br/wp-content/uploads/2012/09/banner-salaestar1.jpg'
		}
		else if (urlParams.comodo === 'quarto') {
			return 'https://www.amagai.com.br/blog/wp-content/uploads/2012/10/banner_quarto_criancas.jpg'
		}
		else {
			return 'https://www.epcriacao.com.br/public/img/site/erro-404.png'
		}
	}

  	//função que vai alterar os valores dinamicamente
		const fornecedor = () => {
		if (urlParams.fornecedor === 'madeira-madeira') {
			return 'MADEIRA MADEIRA Monte sua casa, conte sua história'
		}
		else if (urlParams.fornecedor === 'bonato') {
			return 'BONNATO Qualidade com estilo '
		}
		else if (urlParams.fornecedor === 'philco') {
			return 'PHILCO Tem coisas que só a Philco faz pra você '
		}
		else {
			return 'Volte para o menu anterior '
		}
	}

	return (
		<>
			<Header />
			<S.Content className={background}>
				<S.Container>
					{/* chamando os states pra exibição */}
					<h1>{color}</h1>
					<img src={lojas()} />
					<img src={comodo()} />
					<h1>{fornecedor()}</h1>
				</S.Container>
			</S.Content>
		</>
	)
}
