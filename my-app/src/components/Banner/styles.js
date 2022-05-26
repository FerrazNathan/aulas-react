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
  /* display: flex;
	width: 1000px;
	margin: 50px auto;
	flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
	cursor: pointer; */
`

export const List = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: 500;
	justify-content: center;
	align-items: flex-start;
`