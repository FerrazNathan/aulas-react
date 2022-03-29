import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  align-items: center;
`

export const Input = styled.input`
margin-top: 30px;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;   
   &::placeholder{
     padding: 25px;
   }
`