import styled from "styled-components";

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
  padding: 10px;
  & p {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    margin: 10px 15px;
  }
  & h1{
    margin: 10px;
    text-transform: uppercase;
    text-align: center;
  }
`
