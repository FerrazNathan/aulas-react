import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 10px auto;
  color: #FFF;
  text-align: center;
  align-items: center;
  & h1{
    font-size: 26px;
    text-align: center;
    padding: 20px;
  }
`

export const Content = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  & h1{
    font-size: 26px;
    text-align: center;
    padding: 20px;
  }
  & img {
    width: 1200px;
    height: 700px;
    margin-bottom: 20px;
    
  }
`

export const Input = styled.input`
  margin: 30px 0;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;   
   &::placeholder{
     padding: 25px;
   }
`

export const Box = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  & h1{
    font-size: 26px;
    text-align: center;
    padding: 20px;
  }
  & img {
    width: 1200px;
    height: 700px;
    margin-bottom: 20px;
  }
`