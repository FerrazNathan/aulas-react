import styled from "styled-components";

export const Container = styled.section`
  width: 1080px;
  height: 100%;
  margin: 50px auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  line-height: 3;
  flex-direction: column;
  & h1{
    text-transform: uppercase;
    text-align: center;
    font-size: 34px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  & h2{
    text-transform: uppercase;
  }
`

export const Buttons = styled.div`
  width: 980px;
  margin: 20px auto;
`

export const Corinthians = styled.button`
  width: 20%;
  height: 40px;
  padding: 10px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: #060606;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
`

export const Palmeiras = styled.button`
  width: 20%;
  height: 40px;
  padding: 10px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: #3BD62F;
  color: #fff;
  font-weight: 600;
  font-size: 17px;
`
export const SaoPaulo = styled.button`
  width: 20%;
  height: 40px;
  padding: 10px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: #D40C23;
  color: #060606;
  font-weight: 600;
  font-size: 17px;
`

export const Brasil = styled.button`
  width: 20%;
  height: 40px;
  padding: 10px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: #FDEF08;
  color: #3BD62F;
  font-weight: 600;
  font-size: 17px;
`