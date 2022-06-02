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
	const [monitoring, setMonitoring] = useState()
	const [dataEditor, setDataEditor] = useState()

	const url = 'https://connections-a2264-default-rtdb.firebaseio.com/inscricao.json'

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
	}, [monitoring])

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
					setMonitoring(!monitoring)
				}).catch(() => {
				})
		} catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}

	const deleting = (id) => {
		try {
			axios.delete(`https://connections-a2264-default-rtdb.firebaseio.com/inscricao/${id}.json`, {})
				.then(function (response) {
					setMonitoring(!monitoring)
				}).catch(() => {
				})
		} catch (e) {
			throw new Error("Algo deu errado na conexão");
		}
	}

	const editing = (id) => {
		try {
			axios.patch(`https://connections-a2264-default-rtdb.firebaseio.com/inscricao/${id}.json`, { name: dataEditor })
				.then(function (response) {
					setMonitoring(!monitoring)
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
					{
						responseData && Object.values(responseData).map((name) => {
							return (
								<>
									<S.List key={name}>
										<p>{name[1].name} {name[1].surname}</p>
										<input type='search' onchange={(e) => setDataEditor(e.target.value)} />
										<button onClick={(e) => {
											e.preventDefault()
											editing(name[0])
										}}>
											Editar
										</button>
										<button onClick={() => deleting(name[0])}>Remover</button>
									</S.List>
								</>

							)
						})
					}
				</S.Container>
				<form>
					<label>Nome</label>	<input type='text' onChange={(e) => setName(e.target.value)} />
					<label>Sobrenome</label><input type='text' onChange={(e) => setSurName(e.target.value)} />
					<label>Telefone</label><input type='number' onChange={(e) => setFone(e.target.value)} />
					<label>Cidade</label><input type='text' onChange={(e) => setCity(e.target.value)} />
					<label>Pastor</label><input type='text' onChange={(e) => setSheperd(e.target.value)} />
					<label>Igreja</label><input type='text' onChange={(e) => setChurch(e.target.value)} />
					<label>Cargo</label><input type='text' onChange={(e) => setOffice(e.target.value)} />
					<button
						onClick={(e) => {
							e.preventDefault()
							register()
						}}>
						Inscrever-se
					</button>
				</form>
			</S.Box>
		</>
	)
}