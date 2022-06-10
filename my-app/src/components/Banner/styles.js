import styled from 'styled-components'

export const Box = styled.div`
	max-width: 1000px;
	margin: 50px auto;
	color: #FFF;
	display: flex;
	justify-content: space-between;
	& h1{
		text-align: left;
		text-transform: uppercase;
	}
	& img {
		width: 350px;
		height: 330px;
	}
	& input {
		outline: 0;
		border-radius: 10px;
		border: none;
		padding: 5px;
		margin: 10px 0;
	}
`

export const Button = styled.button`
	width: 100px;
	height: 30px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
`

export const BoxMovies = styled.div`

`

export const BoxSeries = styled.div`

`

export const List = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 500;
	justify-content: center;
	align-items: flex-start;
	text-transform: uppercase;
	line-height: 1.5;
	margin-bottom: 20px;
	margin-top: 10px;
	:last-child{
		padding-bottom: 30px;
	}
	& button{
		
	}
`