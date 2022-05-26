import styled from 'styled-components'

export const Box = styled.div`
	max-width: 1000px;
	margin: 50px auto;
	color: #FFF;
	height: 90vh;
	& h1{
		text-align: left;
	}
`

export const Container = styled.div`

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
`