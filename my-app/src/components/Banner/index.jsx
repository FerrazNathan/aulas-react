import React, { useEffect, useState } from "react";
import * as S from './styles'
import Header from "../Header";
import axios from "axios";

export const Banner = () => {

	const [responseData, setResponseData] = useState()
	const [name, setName] = useState()
	const [surName, setSurName] = useState()
	const [fone, setFone] = useState()
	const [city, setCity] = useState()
	const [sheperd, setSheperd] = useState()
	const [church, setChurch] = useState()
	const [office, setOffice] = useState()


	const url = 'https://conferencia-radicais-default-rtdb.firebaseio.com/inscritos.json'

	useEffect(() => {
		try {
			axios.get(url)
				.then(function (response) {
					setResponseData(Object.entries(response.data))
				}).catch(() => {
				})
		} catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}, [])

	const register = () => {
		try {
			axios.post(url, {
				name: name,
				surname: surName,
				tel: fone,
				city: city,
				sheperd: sheperd,
				church: church,
				office: office,
			})
				.then(function (response) {
					setResponseData(Object.entries(response.data))
				}).catch(() => {
				})
		} catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}

	return (
		<>
			<Header />
			<S.Box>
				<h1>Lista de inscrição</h1>
				<S.Container>
					{/* {
						responseData && Object.values(responseData).map((name) => {
							return (
								<>
									<S.List key={name}>
										<p>{name[1].name}</p>
									</S.List>
								</>

							)
						})
					} */}
				</S.Container>
				<form>
					<label>Nome</label>	<input type='text' onChange={(e) => setName(e.target.value)}/>
					<label>Sobrenome</label><input type='text' onChange={(e) => setSurName(e.target.value)}/>
					<label>Telefone</label><input type='number' onChange={(e) => setFone(e.target.value)}/>
					<label>Cidade</label><input type='text' onChange={(e) => setCity(e.target.value)}/>
					<label>Pastor</label><input type='text' onChange={(e) => setSheperd(e.target.value)}/>
					<label>Igreja</label><input type='text' onChange={(e) => setChurch(e.target.value)}/>
					<label>Cargo</label><input type='text' onChange={(e) => setOffice(e.target.value)}/>
					<button onClick={() => register()}>Inscrever-se</button>
				</form>
			</S.Box>
		</>
	)
}