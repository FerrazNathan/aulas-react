import styled from 'styled-components'

export const Box = styled.div`
	max-width: 1000px;
	margin: 50px auto;
	color: #FFF;
`

export const Container = styled.div`
    display: flex;
		width: 1000px;
		margin: 50px auto;
		flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
		& a{
			font-size: 18px;
			font-weight: 500;
			cursor: pointer;
		}
`