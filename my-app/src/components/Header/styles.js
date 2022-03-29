import styled from "styled-components";

export const ContentHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 150px;
  border: 1px solid #CCC;
  margin: 0 auto;
  background-color: #720404;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 600;
  padding: 20px;
  & ul {
    margin-top: 35px;
    display: flex;
    text-align: center;
    justify-content: space-around;
    list-style: none;
    cursor: pointer;
  }
`
export const Text = styled.h1`
  color: #FFF;
  text-align: center;
`