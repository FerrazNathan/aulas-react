import React from "react";
import * as S from './styles'
import Header from "../Header";
import Formulario from "../Formulario";

export const Banner = () => {

	return (
		<>
			<Header />
			<S.Box>
				<S.Container>
					<Formulario />
				</S.Container>
			</S.Box>
		</>
	)
}