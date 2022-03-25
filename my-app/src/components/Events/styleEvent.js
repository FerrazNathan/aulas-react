import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  color: #FFF;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
`

export const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
   
   &::placeholder{
     font-size: 18px;
     padding-left: 5px;
   }
   &:focus{
    background-color: #e8f0fe;
  }
`

export const Content = styled.div`
  border: 1px solid #FFF;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 380px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 30px;
  padding: 30px;
`

export const BoxText = styled.h1`
  font-weight: 600;
  text-align: start;
  margin: 10px 15px;
  cursor: pointer;
`