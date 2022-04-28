import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 20px;
  font-size: 20px;
`

export const Text = styled.p`
  line-height: 1.5;
  margin-top: 20px;
`

export const Button = styled.button`
  width: 5%;
  height: 30px;
  border-radius: 15px;
  margin: 30px;
  border: none;
  background: #060606;
  color: #FFF;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
`