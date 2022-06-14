import styled from 'styled-components'

export const Box = styled.div`
	max-width: 1000px;
	margin: 50px auto;
	color: #FFF;
	height: 90vh;
	& h1{
		text-align: left;
		text-transform: uppercase;
	}
	& input, select {
		outline: 0;
		border-radius: 10px;
		border: none;
		padding: 2px;
		margin: 10px 0;
	}
  & form{
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 90%;
    & input, select, button {
      width: 50%;
      margin-bottom: 20px;
      padding: 5px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;
	align-items: center;
	margin-bottom: 20px;
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
		cursor: pointer;
	}
	& p{

	}
`

export const Button = styled.button`
  width: 10%;
  height: 5%;
  padding: 3px;
	margin-top: 15px;
	border: none;
	border-radius: 10px;
	cursor: pointer;
`