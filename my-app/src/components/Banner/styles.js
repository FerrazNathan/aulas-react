import styled from 'styled-components'

export const Box = styled.div`
	width: 1000px;
	margin: 50px auto;
	color: #FFF;
`

export const Container = styled.div`
    display: flex;
		width: 1000px;
		margin: 50px auto;
		flex-wrap: wrap;
    align-item: center;
		cursor: pointer;
    justify-content: space-around;
    & img{
			width: 400px;
			margin: 10px
		}
`