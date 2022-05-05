import React from "react";
import * as S from './styles'
import Header from "../Header";

export const Banner = () => {

	return (
		<>
			<Header />
			<S.Box>
				<S.Container>
					<div className='container'>
						<ul className='lists'>
							<li>
								<a href='http://localhost:3000/cars?page=carros&name=lojadecarros&cor=blue'>Exercício de Split</a>
							</li>
						</ul>
						<ul className='lists'>
							<li>
								<a href='/sports'>Teste Query String</a>
							</li>
						</ul>
					</div>
				</S.Container>
			</S.Box>
		</>
	)
}