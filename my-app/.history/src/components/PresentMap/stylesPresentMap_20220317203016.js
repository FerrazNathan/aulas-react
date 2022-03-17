import styled from "styled-components";

export const BoxText = styled.div`
  border: 1px solid #FFF;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 380px;
  height: 100%;
  border-radius: 10px;
  margin-top: 30px;
  padding: 10px;
  & h1{
    padding: 20px;
  }
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
  `