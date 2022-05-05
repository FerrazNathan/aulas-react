import styled from 'styled-components'

export const Content = styled.section`
  display: flex;
	justify-content: space-around;
	flex-direction: column;
	width: 940px;
	margin: 20px auto;
`

export const Container = styled.div`
  color: #FFF;
	margin: 20px auto;
	width: 700px;
	text-align: center;
	& h1{
		text-transform: uppercase;
		margin: 20px;
	}
	& p{
		font-size: 18px;
	}
	& img{
		width: 700px;
		height: 550px;
		margin: 20px auto;
	}
`