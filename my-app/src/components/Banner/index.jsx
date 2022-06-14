import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";

export const Banner = () => {

	const [email, setEmail] = useState()
	const [password, setPassword] = useState('')

	const submit = () => {
		localStorage.setItem('email', email)
		localStorage.setItem('password', password)
		window.location.href = '/cadastro'
	}

	console.log(email, 'sacana');
	console.log(password, 'senha do mal');

	return (
		<>
			<Header />
			<S.Box>
				Exercício de LocalStorage
				<input
					type='email'
					placeholder='Digite seu email'
					value={email}
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Digite sua senha'
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
				/>
				<S.Button onClick={() => submit()}>
					Verificar
				</S.Button>
			</S.Box>
		</>
	)
}