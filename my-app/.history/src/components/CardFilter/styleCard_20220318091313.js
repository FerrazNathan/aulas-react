import styled from "styled-components";

export const Content = styled.div`
  & p {
    font-weight: 600;
    font-size: 20px;
    text-align: start;
    margin: 10px 15px;
  }
  & span {
    font-size: 18px;
    text-transform: none;
    margin: 10px 15px;
  }
  & h1{
    padding: 10px;
    margin-left: 5px;
    text-transform: uppercase;
  }
`

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 18px;
  & img{
    width: 80px;
    height: 80px;
    margin-top: 20px;
  }
  & h2{
    margin-right: 30px;
    text-transform: uppercase;
    width: 200px;
  }
`