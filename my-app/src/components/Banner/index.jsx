import React from "react";
import * as S from './styles'
import { Redirect } from "../../utils";
import Header from "../Header";

export const Banner = () => {

	return (
		<S.Box>
			<Header />
			<S.Container>
				<img src='./cars.jpg' alt='Loja de carros' onClick={() => Redirect('/cars')}/>
				<img src='./casa.jpeg' alt='Casa de luxo' onClick={() => Redirect('/house')} />
				<img src='./mercado.jpg' alt='Hipermercado' onClick={() => Redirect('/market')} />
				<img src='./lojapremiun.jpg' alt='Loja de esportes' onClick={() => Redirect('/sports')} />
			</S.Container>
		</S.Box>
	)
}